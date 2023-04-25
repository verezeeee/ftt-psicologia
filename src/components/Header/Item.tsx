import { Avatar, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { User } from "../../utils/types";

export default function Item({
  user,
  href = "",
  icon,
  activeTab,
  setActiveTab,
  sidebarOpened,
  setSidebarOpened,
}: {
  user: User;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  href: string;
  icon: IconType;
  sidebarOpened: boolean;
  setSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Flex
      onClick={() => {
        setActiveTab(href);
        setSidebarOpened(false);
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
