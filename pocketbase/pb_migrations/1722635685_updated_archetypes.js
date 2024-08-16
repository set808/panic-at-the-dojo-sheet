/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v9ok8f3m66sun0b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y28xkgrx",
    "name": "focused_ability",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8yfjzugw",
    "name": "fused_ability",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgposy4e",
    "name": "frantic_ability",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0pijdvz3",
    "name": "alpha_super_move",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lstglgiv",
    "name": "delta_super_move",
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

  // remove
  collection.schema.removeField("y28xkgrx")

  // remove
  collection.schema.removeField("8yfjzugw")

  // remove
  collection.schema.removeField("bgposy4e")

  // remove
  collection.schema.removeField("0pijdvz3")

  // remove
  collection.schema.removeField("lstglgiv")

  return dao.saveCollection(collection)
})
