import React from "react";
import {
  Flex,
  Icon,
  Text,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { User } from "../../utils/types";
import Item from "./Item";
import { useAuth } from "../../contexts/AuthContext";
import Greeting from "./Greeting";
import {
  IoMdClose,
  IoMdCloseCircle,
  IoMdPeople,
  IoMdPerson,
} from "react-icons/io";
import { useRouter } from "next/router";
import { useMediaQuery } from "../../utils/useMediaQuery";
import Button from "../Button";

export default function Drawer({
  sidebarOpened,
  setSidebarOpened,
  activeTab,
  setActiveTab,
}: {
  sidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { user, signOut } = useAuth();

  const { mobile } = useMediaQuery();

  React.useEffect(() => {
    if (!mobile) {
      setSidebarOpened(false);
    }
  }, [mobile]);

  return (
    <ChakraDrawer
      isOpen={sidebarOpened}
      placement="right"
      onClose={() => setSidebarOpened(false)}
    >
      <DrawerOverlay />
      <DrawerContent bg="#E9E9E9">
        <Flex align="center" w="100%" justify="space-between" p="4" py="5">
          <Greeting mb={-1} user={user} />
          <Icon
            cursor="pointer"
            onClick={() => setSidebarOpened(false)}
            as={IoMdCloseCircle}
            color="#C760EB"
            fontSize="1.5rem"
          />
        </Flex>

        {user.role === "admin" && (
          <Flex h="100%" flexDir="column" justify="space-between" px="4">
            <Flex flexDir="column">
              <Flex h="4" />
              <Item
                user={user}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sidebarOpened={sidebarOpened}
                setSidebarOpened={setSidebarOpened}
                href="Pacientes"
                icon={IoMdPerson}
              />
              <Item
                user={user}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sidebarOpened={sidebarOpened}
                setSidebarOpened={setSidebarOpened}
                href="Alunos"
                icon={IoMdPeople}
              />
              <Item
                user={user}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sidebarOpened={sidebarOpened}
                setSidebarOpened={setSidebarOpened}
                href="Professores"
                icon={IoMdPerson}
              />
            </Flex>
            <Flex flexDir="column" p="4">
              <Button mb={4} bg="transparent" label="Sair" onPress={signOut} />
              <Text color="purple" w="100%" textAlign="center">
                Desenvolvido com 💜 pela FTT
              </Text>
            </Flex>
          </Flex>
        )}
      </DrawerContent>
    </ChakraDrawer>
  );
}
