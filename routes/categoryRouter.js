const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get("/new", categoryController.createCategoryGet);

categoryRouter.post("/new", categoryController.createCategoryPost);

categoryRouter.get("/:id/edit", categoryController.updateCategoryGet);

categoryRouter.post("/:id/edit", categoryController.updateCategoryPost);

categoryRouter.get("/:id/delete", categoryController.deleteCategoryGet);

categoryRouter.post("/:id/delete", categoryController.deleteCategoryPost);

categoryRouter.get("/:id", categoryController.getCategoryDetails);

module.exports = categoryRouter;