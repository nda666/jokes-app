import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useApollo } from '../apollo/client';
import './styles.css';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Welcome to next!</title>
      </Head>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default App;
