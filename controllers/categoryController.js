const db = require("../db/queries");

async function getAllCategories(req, res) {
    const categories = await db.getAllCategories();

    res.render("categories", {
        title: "Categories",
        categories: categories
    });
}

module.exports = {
    getAllCategories
};