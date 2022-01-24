module.exports = {
  projects: {
    app: {
      schema: ['./schema.gql'],
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:4000/graphql',
          },
        },
      },
    },
  },
};
