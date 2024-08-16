/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qy98vautk9y9t9n",
    "created": "2024-08-02 22:09:54.751Z",
    "updated": "2024-08-02 22:09:54.751Z",
    "name": "forms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k7xitos3",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "mjojsbuv",
        "name": "description",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9g6mk9a8",
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
      },
      {
        "system": false,
        "id": "qu8vzps1",
        "name": "action_dice",
        "type": "json",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "19lmiwbi",
        "name": "unique_actions",
        "type": "json",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "mbpjvcds",
        "name": "skill",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qy98vautk9y9t9n");

  return dao.deleteCollection(collection);
})
