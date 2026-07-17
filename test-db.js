const pool = require("./db/pool");

async function test() {
    const result = await pool.query("SELECT NOW()");
    console.log(result.rows);
}

test();