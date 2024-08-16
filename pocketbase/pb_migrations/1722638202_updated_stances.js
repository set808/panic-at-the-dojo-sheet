/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hxqm6hx5lvvtxgc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9ugsdvjz",
    "name": "form_name_used",
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
  const collection = dao.findCollectionByNameOrId("hxqm6hx5lvvtxgc")

  // remove
  collection.schema.removeField("9ugsdvjz")

  return dao.saveCollection(collection)
})
