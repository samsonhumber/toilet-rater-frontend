import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from "../components/Layout";

// Custom colors and fonts added to Chakra UI theme
const colors = {
  brand: {
    primary: "#FD2B46",
    light: "#FFFFFF",
    dark: "#32373B",
  },
};
const fonts = {
  brand: {
    logo: `'Permanent-Marker', sans-serif`,
    main: `'Nunito', sans-serif`,
  },
};
const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
