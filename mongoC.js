import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://110298romu:${password}@github-actions-test-db.z4lcjaj.mongodb.net/?retryWrites=true&w=majority&appName=github-actions-test-db`; // cluster url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("github-actions-test-db");
export default db;