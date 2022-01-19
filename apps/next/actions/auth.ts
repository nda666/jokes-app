import { initializeApollo } from '@app-next/apollo/client';
import gql from 'graphql-tag';

export async function login(email, password) {
  const apolloClient = initializeApollo();
  const login = await apolloClient.mutate({
    variables: {
      input: {
        email,
        password,
      },
    },
    mutation: gql`
      mutation Login($input: LoginInput!) {
        login(input: $input) {
          token
          refreshToken
          user {
            id
            name
            email
            role
          }
        }
      }
    `,
  });

  return login;
}
