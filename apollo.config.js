module.exports = {
  client: {
    includes: ["./graphql/**/*"],
    service: {
      name: "vision-app",
      url: "http://45.40.193.174:8080/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "dwRzEIixW4F1HeCIVNuTsnuk0XZJHFTO",
      },
      skipSSLValidation: true,
    },
  },
};
