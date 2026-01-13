const { defineConfig } = require("drizzle-kit");

module.exports = defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.js",
  out: "./drizzle",
  dbCredentials: {
    host: "localhost",
    port: 5432,
    database: "mydb",
    user: "postgres",
    password: "test123",
    ssl: false,
  },
});
