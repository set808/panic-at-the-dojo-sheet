/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9ok8f3m66sun0b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ni6y9n5f",
    "name": "complexity",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9ok8f3m66sun0b")

  // remove
  collection.schema.removeField("ni6y9n5f")

  return dao.saveCollection(collection)
})
