const pool = require("./pool");

// Get all categories
async function getAllCategories() {
    const { rows } = await pool.query(
        "SELECT * FROM categories ORDER BY name"
    );
    return rows;
}

// Get all items
async function getAllItems() {
    const { rows } = await pool.query(`
        SELECT
            items.id,
            items.name,
            items.description,
            items.price,
            items.quantity,
            categories.name AS category
        FROM items
        JOIN categories
        ON items.category_id = categories.id
        ORDER BY items.name;
    `);

    return rows;
}

module.exports = {
    getAllCategories,
    getAllItems
};