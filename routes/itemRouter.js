const { Router } = require("express");
const itemController = require("../controllers/itemController");

const itemRouter = Router();

// View all items
itemRouter.get("/", itemController.getAllItems);

// Add new item form
itemRouter.get("/new", itemController.createItemGet);

// Handle form submission
itemRouter.post("/new", itemController.createItemPost);

itemRouter.get("/:id/edit", itemController.updateItemGet);

itemRouter.post("/:id/edit", itemController.updateItemPost);

itemRouter.get("/:id/delete", itemController.deleteItemGet);

itemRouter.post("/:id/delete", itemController.deleteItemPost);

itemRouter.get("/:id", itemController.getItemDetails);

module.exports = itemRouter;