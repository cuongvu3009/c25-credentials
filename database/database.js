import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

let sql;
if (Deno.env.get("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({
    host: "aws-0-eu-north-1.pooler.supabase.com",
    port: 6543,
    username: "postgres.mgavmwhdqtahizhsepwy",
    password: "KW.hqMB$J5Yhyj8",
    database: "postgres",
  });
}

export { sql };
