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

async function createItemGet(req, res) {
    const categories = await db.getCategoriesForForm();

    res.render("itemForm", {
        title: "Add Item",
        categories,
    });
}

async function createItemPost(req, res) {

    const {
        name,
        description,
        price,
        quantity,
        category_id
    } = req.body;

    await db.insertItem(
        name,
        description,
        price,
        quantity,
        category_id
    );

    res.redirect("/items");
}

async function getCategoryDetails(req, res) {

    const id = req.params.id;

    const category = await db.getCategoryById(id);

    res.render("categoryDetails", {
        title: category.name,
        category,
    });
}

async function getItemDetails(req, res) {

    const id = req.params.id;

    const item = await db.getItemById(id);

    res.render("itemDetails", {
        title: item.name,
        item,
    });
}



module.exports = {
    getCategories,
    getItems,

    createCategoryGet,
    createCategoryPost,

    createItemGet,
    createItemPost,

    getCategoryDetails,
    getItemDetails,
};