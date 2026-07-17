const { Router } = require("express");
const inventoryController = require("../controllers/inventoryController");

const itemRouter = Router();

itemRouter.get("/", inventoryController.getItems);

module.exports = itemRouter;