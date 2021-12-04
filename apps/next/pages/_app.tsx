import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Welcome to next!</title>
      </Head>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default CustomApp;
