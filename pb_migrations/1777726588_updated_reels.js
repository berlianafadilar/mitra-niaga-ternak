/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3436638350")

  // update field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "file2093472300",
    "maxSelect": 0,
    "maxSize": 524288000,
    "mimeTypes": [
      "video/webm",
      "video/mp4",
      "image/png",
      "image/jpeg"
    ],
    "name": "video",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3436638350")

  // update field
  collection.fields.addAt(2, new Field({
    "help": "",
    "hidden": false,
    "id": "file2093472300",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": [
      "video/webm",
      "video/mp4",
      "image/png",
      "image/jpeg"
    ],
    "name": "video",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
})
