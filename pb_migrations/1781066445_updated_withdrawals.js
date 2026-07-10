/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3978589275")

  // remove field
  collection.fields.removeById("relation2372834615")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text2372834615",
    "max": 0,
    "min": 0,
    "name": "sellerId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3978589275")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1736455494",
    "help": "",
    "hidden": false,
    "id": "relation2372834615",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "sellerId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("text2372834615")

  return app.save(collection)
})
