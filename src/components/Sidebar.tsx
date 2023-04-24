import { Avatar, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

import { FaUser, FaUserCircle } from "react-icons/fa";
import { IoMdPerson, IoMdPeople } from "react-icons/io";
import { useAuth } from "../contexts/AuthContext";
import { IconType } from "react-icons";

export default function Sidebar({
  activeTab = "",
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { user } = useAuth();

  function Greeting() {
    return (
      <Flex cursor="default" align="center" borderRadius="10" mb="2" py="2">
        <Flex align="center" px="2">
          <Avatar name={user.nome} size="sm" />
          <Text ml="3" color="#333" fontSize="1rem">
            Olá, {user.nome}
          </Text>
        </Flex>
      </Flex>
    );
  }

  function Item({ href = "", icon }: { href: string; icon: IconType }) {
    return (
      <Flex
        onClick={() => {
          setActiveTab(href);
        }}
        cursor="pointer"
        _hover={{
          backgroundColor: "#D9D9D9",
          transition: "0.3s",
        }}
        align="center"
        borderRadius="10"
        mb="2"
        py="2"
        bg={activeTab === href ? "#D9D9D9" : null}
      >
        {href === "Home" ? (
          <Flex align="center" px="2">
            <Avatar name={user.nome} size="sm" />
            <Text ml="3" color="#333" fontSize="1rem">
              Olá, {user.nome}
            </Text>
          </Flex>
        ) : (
          <Flex align="center" px="4">
            <Icon as={icon} fontSize="1.2em" color="#C760EB" />

            <Text ml="3" color="#333" fontSize="1rem">
              {href}
            </Text>
          </Flex>
        )}
      </Flex>
    );
  }

  return (
    <Flex
      zIndex={3}
      flexDir="column"
      w={300}
      h="100vh"
      position="fixed"
      p="4"
      bg="#E9E9E9"
      borderRight="1px solid #EEE"
    >
      {user.role === "admin" && (
        <Flex flexDir="column">
          <Greeting />
          <Flex h="4" />
          <Item href="Pacientes" icon={IoMdPerson} />
          <Item href="Alunos" icon={IoMdPeople} />
          <Item href="Professores" icon={IoMdPerson} />
        </Flex>
      )}
    </Flex>
  );
}
