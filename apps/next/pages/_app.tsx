import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useApollo } from '../apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import './styles.scss';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Welcome to next!</title>
      </Head>
      <ChakraProvider>
        <div className="app">
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
