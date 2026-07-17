const pool = require("./pool");

// Get all categories
async function getAllCategories() {
    const { rows } = await pool.query(
        "SELECT * FROM categories ORDER BY id"
    );

    return rows;
}

// Insert category
async function insertCategory(name, description) {
    await pool.query(
        `
        INSERT INTO categories(name, description)
        VALUES($1, $2)
        `,
        [name, description]
    );
}

// Get all items
async function getAllItems() {
    const { rows } = await pool.query(`
        SELECT items.*, categories.name AS category
        FROM items
        JOIN categories
        ON items.category_id = categories.id
        ORDER BY items.id
    `);

    return rows;
}

async function getCategoriesForForm() {
    const { rows } = await pool.query(
        "SELECT id, name FROM categories ORDER BY name"
    );

    return rows;
}

async function getItemsByCategoryId(categoryId) {
    const { rows } = await pool.query(
        `
        SELECT id, name, description, price, quantity
        FROM items
        WHERE category_id = $1
        ORDER BY name
        `,
        [categoryId]
    );

    return rows;
}

async function getCategoryItemCount(categoryId) {
    const { rows } = await pool.query(
        `
        SELECT COUNT(*)::int AS count
        FROM items
        WHERE category_id = $1
        `,
        [categoryId]
    );

    return rows[0].count;
}

async function deleteCategory(id) {
    await pool.query(
        `
        DELETE FROM categories
        WHERE id = $1
        `,
        [id]
    );
}

async function insertItem(name, description, price, quantity, categoryId) {
    await pool.query(
        `
        INSERT INTO items
        (name, description, price, quantity, category_id)
        VALUES ($1, $2, $3, $4, $5)
        `,
        [name, description, price, quantity, categoryId]
    );
}

async function getCategoryById(id) {
    const { rows } = await pool.query(
        `
        SELECT *
        FROM categories
        WHERE id = $1
        `,
        [id]
    );

    return rows[0];
}

async function getItemById(id) {
    const { rows } = await pool.query(
        `
        SELECT items.*, categories.name AS category
        FROM items
        JOIN categories
        ON items.category_id = categories.id
        WHERE items.id = $1
        `,
        [id]
    );

    return rows[0];
}

async function updateCategory(id, name, description) {
    await pool.query(
        `
        UPDATE categories
        SET
            name = $1,
            description = $2
        WHERE id = $3
        `,
        [name, description, id]
    );
}

async function updateItem(
    id,
    name,
    description,
    price,
    quantity,
    category_id
) {
    await pool.query(
        `
        UPDATE items
        SET
            name = $1,
            description = $2,
            price = $3,
            quantity = $4,
            category_id = $5
        WHERE id = $6
        `,
        [name, description, price, quantity, category_id, id]
    );
}

async function deleteItem(id) {
    await pool.query(
        `
        DELETE FROM items
        WHERE id = $1
        `,
        [id]
    );
}


// Export everything ONCE
module.exports = {
    getAllCategories,
    getAllItems,

    insertCategory,
    getCategoriesForForm,
    getItemsByCategoryId,
    getCategoryItemCount,
    deleteCategory,
    insertItem,

    getCategoryById,
    getItemById,

    updateCategory,
    updateItem,
    deleteItem,
};