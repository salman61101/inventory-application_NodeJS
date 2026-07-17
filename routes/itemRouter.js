const { Router } = require("express");
const inventoryController = require("../controllers/inventoryController");

const itemRouter = Router();

// View all items
itemRouter.get("/", inventoryController.getItems);

// Add new item form
itemRouter.get("/new", inventoryController.createItemGet);

// Handle form submission
itemRouter.post("/new", inventoryController.createItemPost);

module.exports = itemRouter;