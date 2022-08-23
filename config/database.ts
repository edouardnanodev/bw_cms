// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "blackwalker.mysql.database.azure.com"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "blackwalker"),
      user: env("DATABASE_USERNAME", "bw_admin"),
      password: env("DATABASE_PASSWORD", "nano_s.4321"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", true), // For self-signed certificates
      },
    },
    debug: false,
  },
});
