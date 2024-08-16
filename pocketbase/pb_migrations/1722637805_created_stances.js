/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hxqm6hx5lvvtxgc",
    "created": "2024-08-02 22:30:05.319Z",
    "updated": "2024-08-02 22:30:05.319Z",
    "name": "stances",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s9qlkx0a",
        "name": "style",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "hqnnjo1z0ouogq2",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "j2m15dqb",
        "name": "form",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "qy98vautk9y9t9n",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("hxqm6hx5lvvtxgc");

  return dao.deleteCollection(collection);
})
