/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1051530245")

  // remove field
  collection.fields.removeById("relation1689669068")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1051530245")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3754236674",
    "help": "",
    "hidden": false,
    "id": "relation1689669068",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "userId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
