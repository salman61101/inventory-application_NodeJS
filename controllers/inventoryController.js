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

module.exports = {
    getCategories,
    getItems,
};