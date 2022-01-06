import { AppProps } from 'next/app';
import Head from 'next/head';
import { useApollo } from '../apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import './styles.scss';
import { AuthProvider } from '../lib/auth';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <AuthProvider>
      <Head>
        <title>Welcome to next!</title>
      </Head>
      <ChakraProvider>
        <div className="app">
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
