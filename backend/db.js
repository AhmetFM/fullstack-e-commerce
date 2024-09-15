import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
  user: "ahmetfm",
  host: "postgres", // Docker Compose dosyasındaki PostgreSQL servisi ismi
  database: "mydb",
  password: "ahmet123",
  port: 5432,
});
