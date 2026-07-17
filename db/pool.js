const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "postgres",
    password: "@Salman123",
    database: "inventory_db",
    port: 5432
});