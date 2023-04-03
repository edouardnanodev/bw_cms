// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "nanodev-db.crsobw45ofpe.ca-central-1.rds.amazonaws.com"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "blackwalker"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "nanodevca"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: true,
  },
});
