const db = require("../db/queries");

async function getAllItems(req, res) {
    const items = await db.getAllItems();

    res.render("items", {
        title: "Items",
        items: items
    });
}

async function createItemGet(req, res) {
    const categories = await db.getCategoriesForForm();

    res.render("itemForm", {
        title: "Add Item",
        categories,
        item: null,
    });
}

async function createItemPost(req, res) {
    const {
        name,
        description,
        price,
        quantity,
        category_id,
    } = req.body;

    await db.insertItem(name, description, price, quantity, category_id);

    res.redirect("/items");
}

async function getItemDetails(req, res) {
    const item = await db.getItemById(req.params.id);

    res.render("itemDetails", {
        title: item.name,
        item,
    });
}

async function updateItemGet(req, res) {
    const item = await db.getItemById(req.params.id);
    const categories = await db.getCategoriesForForm();

    res.render("itemForm", {
        title: "Edit Item",
        item,
        categories,
    });
}

async function updateItemPost(req, res) {
    const {
        name,
        description,
        price,
        quantity,
        category_id,
    } = req.body;

    await db.updateItem(
        req.params.id,
        name,
        description,
        price,
        quantity,
        category_id
    );

    res.redirect(`/items/${req.params.id}`);
}

async function deleteItemGet(req, res) {
    const item = await db.getItemById(req.params.id);

    res.render("deleteItem", {
        title: "Delete Item",
        item,
    });
}

async function deleteItemPost(req, res) {
    await db.deleteItem(req.params.id);

    res.redirect("/items");
}

module.exports = {
    getAllItems,
    createItemGet,
    createItemPost,
    getItemDetails,
    updateItemGet,
    updateItemPost,
    deleteItemGet,
    deleteItemPost,
};