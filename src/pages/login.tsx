import { Button, Flex, Input, Spacer, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";

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
      });
    } else {
      toast({
        position: "bottom-right",
        status: "success",
        description: "Login realizado com sucesso",
      });
      router.push("/");
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
        boxShadow="rgba(0, 0, 0, 0.1) 0 0 10px"
        borderRadius="10"
        p="8"
      >
        <Text
          color="#333"
          textAlign="center"
          fontSize="1.8rem"
          fontWeight={600}
        >
          psicare
        </Text>{" "}
        <Text color="#333" textAlign="center" fontSize="1rem">
          Faça login em sua conta
        </Text>
        <form>
          <Flex mt="10" flexDir="column">
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Seu email"
              type="email"
              autoComplete="email"
            />
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              mt="4"
              placeholder="Sua senha"
              autoComplete="current-password"
            />
            <Button mt="4" onClick={handleSignIn}>
              <Text fontWeight={500}>Entrar</Text>
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
