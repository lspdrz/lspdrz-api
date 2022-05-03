module.exports = ({ env }) => ({
  // defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("POSTGRES_HOST", "localhost"),
      port: env.int("POSTGRES_PORT", 5432),
      database: env("POSTGRES_DB", "bank"),
      user: env("POSTGRES_USER", "postgres"),
      password: env("POSTGRES_PASSWORD", "0000"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
  }
});
