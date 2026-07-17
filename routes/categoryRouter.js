const { Router } = require("express");
const inventoryController = require("../controllers/inventoryController");

const categoryRouter = Router();

categoryRouter.get("/", inventoryController.getCategories);

module.exports = categoryRouter;