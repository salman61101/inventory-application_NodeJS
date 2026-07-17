const pool = require("./pool");

// Get all categories
async function getAllCategories() {
    const { rows } = await pool.query(
        "SELECT * FROM categories ORDER BY id"
    );

    return rows;
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

module.exports = {
    getAllCategories,
    getAllItems,
};