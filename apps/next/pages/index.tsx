import Layout from '../components/Layout';
import { gql } from '@apollo/client';
import { initializeApollo } from '../apollo/client';

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const { data, errors } = await apolloClient.query({
    query: gql`
      query users {
        users {
          id
          name
        }
      }
    `,
  });
  return {
    props: {
      errors: errors || null,
      users: data?.users || [],
    },
  };
}

export function Index({ users, error }) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <Layout>
      <button className="px-5 py-2 bg-blue-500">Test</button>
    </Layout>
  );
}

export default Index;
