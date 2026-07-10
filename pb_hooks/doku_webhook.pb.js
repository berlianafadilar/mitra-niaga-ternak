// pb_hooks/doku_webhook.pb.js

routerAdd("POST", "/api/mitra-niaga-ternak/doku-webhook", (e) => {
    const body = e.requestInfo().body || {};
    
    // Extract invoice number from DOKU webhook body
    let invoiceNumber = "";
    if (body.virtualAccountData && body.virtualAccountData.trxId) {
        invoiceNumber = body.virtualAccountData.trxId;
    } else if (body.order && body.order.invoice_number) {
        invoiceNumber = body.order.invoice_number;
    } else if (body.trxId) {
        invoiceNumber = body.trxId;
    }
    
    if (!invoiceNumber) {
        return e.json(400, { "error": "No invoice number found in payload" });
    }
    
    try {
        // Cari record transaksi berdasarkan invoice number (yang disimpan di field midtransOrderId)
        const records = $app.findRecordsByFilter(
            "transactions",
            "midtransOrderId = {:invoiceNumber}",
            "",
            1,
            0,
            { "invoiceNumber": invoiceNumber }
        );
        
        if (records.length === 0) {
            return e.json(404, { "error": "Transaction not found for invoice: " + invoiceNumber });
        }
        
        const transaction = records[0];
        
        // Update status transaksi menjadi 'diproses' jika sebelumnya 'menunggu'
        if (transaction.get("status") === "menunggu") {
            transaction.set("status", "diproses");
            $app.save(transaction);
        }
        
        // Response format standar sukses dari DOKU
        return e.json(200, {
            "responseCode": "2002500",
            "responseMessage": "Success"
        });
    } catch (err) {
        return e.json(500, { "error": err.message });
    }
});
