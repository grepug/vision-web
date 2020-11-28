module.exports = {
  client: {
    includes: ["./graphql/**/*.gql"],
    service: {
      name: "vision-app",
      url: "http://localhost:8081/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "myadminsecretkey",
      },
      skipSSLValidation: true,
    },
  },
};
