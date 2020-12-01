const { execSync } = require("child_process");
require("dotenv").config({ path: ".env.local" });

const GRAPHQL_END_POINT = process.env.NEXT_PUBLIC_GRAPHQL_URI;
const GRAPHQL_END_POINT_ADMIN_SECRET =
  process.env.GRAPHQL_END_POINT_ADMIN_SECRET;

execSync(
  `gq ${GRAPHQL_END_POINT} -H 'X-Hasura-Admin-Secret: ${GRAPHQL_END_POINT_ADMIN_SECRET}' --introspect > schema.graphql`,
);

execSync(`graphql-codegen --config codegen.yml`);
