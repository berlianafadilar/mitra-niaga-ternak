/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1051530245")

  // add field
  collection.fields.addAt(8, new Field({
    "help": "",
    "hidden": false,
    "id": "file3031940482",
    "maxSelect": 0,
    "maxSize": 0,
    "mimeTypes": null,
    "name": "photo_profile",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": null,
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1051530245")

  // remove field
  collection.fields.removeById("file3031940482")

  return app.save(collection)
})
