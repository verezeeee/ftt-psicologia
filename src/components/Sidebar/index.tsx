import { Avatar, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdPerson, IoMdPeople } from "react-icons/io";
import { useAuth } from "../../contexts/AuthContext";
import Greeting from "./Greeting";
import Item from "./Item";

export default function Sidebar({
  activeTab = "",
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { user } = useAuth();

  return (
    <Flex
      zIndex={3}
      flexDir="column"
      w={300}
      bottom={0}
      borderTopRightRadius={20}
      h="97vh"
      position="fixed"
      p="4"
      bg="#E9E9E9"
    >
      {user.role === "admin" && (
        <Flex flexDir="column">
          <Greeting user={user} />
          <Flex h="4" />
          <Item
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            href="Secretários"
            icon={IoMdPerson}
          />
          <Item
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            href="Alunos"
            icon={IoMdPeople}
          />
          <Item
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            href="Professores"
            icon={IoMdPerson}
          />
        </Flex>
      )}
    </Flex>
  );
}
