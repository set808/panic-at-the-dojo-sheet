/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9ok8f3m66sun0b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b3sxwinl",
    "name": "emoji",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9ok8f3m66sun0b")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b3sxwinl",
    "name": "emoji",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
