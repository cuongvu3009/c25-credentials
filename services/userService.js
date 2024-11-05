import { sql } from "../database/database.js";

const findUsersWithEmail = async (email) => {
  return await sql`SELECT * FROM users WHERE email = ${ email }`;
};

const addUser = async (email, passwordHash) => {
  await sql`INSERT INTO users (email, password) VALUES (${ email }, ${ passwordHash })`;
};

export { addUser, findUsersWithEmail };
