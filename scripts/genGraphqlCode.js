const { execSync } = require("child_process");
const { config } = require("dotenv");
const { parsed: env } = config({ path: ".env.local" });

const GRAPHQL_END_POINT = env.NEXT_PUBLIC_REAL_GRAPHQL_URI;
const HASURA_GRAPHQL_ADMIN_SECRET = env.HASURA_GRAPHQL_ADMIN_SECRET;

execSync(
  `gq ${GRAPHQL_END_POINT} -H 'X-Hasura-Admin-Secret: ${HASURA_GRAPHQL_ADMIN_SECRET}' --introspect > schema.graphql`,
);

execSync(`graphql-codegen --config codegen.yml`);
