const { Router } = require("express");
const inventoryController = require("../controllers/inventoryController");

const categoryRouter = Router();

categoryRouter.get("/", inventoryController.getCategories);

categoryRouter.get("/new", inventoryController.createCategoryGet);

categoryRouter.post("/new", inventoryController.createCategoryPost);

module.exports = categoryRouter;