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

// Export everything ONCE
module.exports = {
    getAllCategories,
    getAllItems,
    insertCategory,
    getCategoriesForForm,
    insertItem,
};