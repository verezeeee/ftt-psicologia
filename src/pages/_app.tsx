import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
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
