/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qy98vautk9y9t9n")

  // remove
  collection.schema.removeField("u4aouefq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9vjxx880",
    "name": "alternate_names",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qy98vautk9y9t9n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u4aouefq",
    "name": "alternate_names",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^([A-Za-z]+),\\s*([A-Za-z]+),\\s*([A-Za-z]+),\\s*([A-Za-z]+)$"
    }
  }))

  // remove
  collection.schema.removeField("9vjxx880")

  return dao.saveCollection(collection)
})
