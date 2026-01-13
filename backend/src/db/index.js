const { Pool } = require("pg");
const { drizzle } = require("drizzle-orm/node-postgres");

const pool = new Pool({
  connectionString: "postgresql://postgres:test123@localhost:5432/mydb",
});

module.exports = { db: drizzle(pool) };
