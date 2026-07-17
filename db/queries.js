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
    const { rows } = await pool.query(
                "SELECT * FROM items ORDER BY name"
            );
    return rows;
}

module.exports = {
    getAllCategories,
    getAllItems
};