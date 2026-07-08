$content = @'
FROM alpine:latest

RUN apk add --no-cache ca-certificates wget unzip

WORKDIR /pb

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.23.2/pocketbase_0.23.2_linux_amd64.zip && unzip pocketbase_0.23.2_linux_amd64.zip && rm pocketbase_0.23.2_linux_amd64.zip && chmod +x pocketbase

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
'@
$content | Set-Content -Path "C:\apps-mitra-niaga-ternak\database\Dockerfile" -Encoding utf8
