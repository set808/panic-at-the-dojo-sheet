/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqnnjo1z0ouogq2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eohnhpkp",
    "name": "ability",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yb3ttmn8",
    "name": "unique_actions",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gacymxwv",
    "name": "archetype",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "v9ok8f3m66sun0b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hqnnjo1z0ouogq2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eohnhpkp",
    "name": "ability",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yb3ttmn8",
    "name": "unique_actions",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gacymxwv",
    "name": "archetype",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "v9ok8f3m66sun0b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
