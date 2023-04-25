// Description: This file is used to wrap all the pages with the ChakraProvider and AuthContextProvider
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";

// Types
import type { AppProps } from "next/app";

// Contexts
import { AuthContextProvider } from "../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </ChakraProvider>
    </AuthContextProvider>
  );
}
