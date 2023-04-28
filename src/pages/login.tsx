import { Flex, Image, Input, Spacer, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import Button from "../components/Button";

export default function Login() {
  // Hooks
  const { signIn } = useAuth();
  const router = useRouter();
  const toast = useToast();

  // Valores de email e senha
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = async () => {
    const res = await signIn({
      email,
      password,
    });
    if (res.error) {
      toast({
        status: "error",
        description: res.error,
        duration: 500,
      });
    } else {
      toast({
        position: "bottom-right",
        status: "success",
        description: "Login realizado com sucesso",
        duration: 500,
      });
      router.push("/");
      window.scrollTo(0, 0);
    }
  };

  return (
    <Flex
      bg="#FFF"
      h="100vh"
      w="100%"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Flex
        w="80vw"
        maxW={500}
        flexDir="column"
        boxShadow="rgba(199, 96, 235, 0.3) 0 0 10px"
        borderRadius="10"
        p="8"
      >
        <Image
          mb={-6}
          alt="psicare"
          mx="auto"
          src="/logo.png"
          style={{
            width: 200,
            height: "auto",
          }}
        />
        <form>
          <Flex mt="10" flexDir="column">
            <Input
              _hover={{
                border: "2px solid #D5B8FF",
              }}
              _active={{
                border: "2px solid #D5B8FF",
              }}
              _focus={{
                border: "2px solid #D5B8FF",
              }}
              boxShadow="none !important"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Seu email"
              type="email"
              autoComplete="email"
            />
            <Input
              _hover={{
                border: "2px solid #D5B8FF",
              }}
              _active={{
                border: "2px solid #D5B8FF",
              }}
              _focus={{
                border: "2px solid #D5B8FF",
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
              boxShadow="none !important"
              value={password}
              type="password"
              mt="4"
              placeholder="Sua senha"
              autoComplete="current-password"
            />
            <Button onPress={handleSignIn} label="Entrar" />
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
