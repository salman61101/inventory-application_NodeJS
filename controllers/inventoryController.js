const db = require("../db/queries");

async function getCategories(req, res) {
    const categories = await db.getAllCategories();

    res.render("categories", {
        title: "Categories",
        categories,
    });
}

async function getItems(req, res) {
    const items = await db.getAllItems();

    res.render("items", {
        title: "Items",
        items,
    });
}

async function createCategoryGet(req, res) {
    res.render("categoryForm", {
        title: "Add Category",
    });
}

async function createCategoryPost(req, res) {
    const { name, description } = req.body;

    await db.insertCategory(name, description);

    res.redirect("/categories");
}

module.exports = {
    getCategories,
    getItems,
    createCategoryGet,
    createCategoryPost,
};