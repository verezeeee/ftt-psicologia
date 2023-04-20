// Description: This file is used to wrap all the pages with the ChakraProvider and AuthContextProvider
import { ChakraProvider } from "@chakra-ui/react";

// Types
import type { AppProps } from "next/app";

// Contexts
import { AuthContextProvider } from "../../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContextProvider>
  );
}
