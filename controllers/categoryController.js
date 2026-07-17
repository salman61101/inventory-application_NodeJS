const db = require("../db/queries");

async function getAllCategories(req, res) {
    const categories = await db.getAllCategories();

    res.render("categories", {
        title: "Categories",
        categories: categories
    });
}

async function createCategoryGet(req, res) {
    res.render("categoryForm", {
        title: "Add Category",
        category: null,
    });
}

async function createCategoryPost(req, res) {
    const { name, description } = req.body;

    await db.insertCategory(name, description);

    res.redirect("/categories");
}

async function getCategoryDetails(req, res) {
    const category = await db.getCategoryById(req.params.id);

    res.render("categoryDetails", {
        title: category.name,
        category,
    });
}

async function updateCategoryGet(req, res) {
    const category = await db.getCategoryById(req.params.id);

    res.render("categoryForm", {
        title: "Edit Category",
        category,
    });
}

async function updateCategoryPost(req, res) {
    const { name, description } = req.body;

    await db.updateCategory(req.params.id, name, description);

    res.redirect(`/categories/${req.params.id}`);
}

async function deleteCategoryGet(req, res) {
    const category = await db.getCategoryById(req.params.id);
    const itemCount = await db.getCategoryItemCount(req.params.id);

    if (itemCount > 0) {
        const items = await db.getItemsByCategoryId(req.params.id);

        return res.render("deleteCategory", {
            title: "Delete Category",
            category,
            canDelete: false,
            items,
        });
    }

    res.render("deleteCategory", {
        title: "Delete Category",
        category,
        canDelete: true,
        items: [],
    });
}

async function deleteCategoryPost(req, res) {
    const itemCount = await db.getCategoryItemCount(req.params.id);

    if (itemCount > 0) {
        const category = await db.getCategoryById(req.params.id);
        const items = await db.getItemsByCategoryId(req.params.id);

        return res.render("deleteCategory", {
            title: "Delete Category",
            category,
            canDelete: false,
            items,
        });
    }

    await db.deleteCategory(req.params.id);

    res.redirect("/categories");
}

module.exports = {
    getAllCategories,
    createCategoryGet,
    createCategoryPost,
    getCategoryDetails,
    updateCategoryGet,
    updateCategoryPost,
    deleteCategoryGet,
    deleteCategoryPost,
};