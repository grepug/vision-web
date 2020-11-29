module.exports = {
  client: {
    includes: ["./graphql/**/*.gql"],
    service: {
      name: "vision-app",
      url: "http://45.40.193.174:8080/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "myadminsecretkey",
      },
      skipSSLValidation: true,
    },
  },
};
