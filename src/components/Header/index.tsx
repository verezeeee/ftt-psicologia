import {
  Flex,
  Icon,
  Text,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "../Button";
import { useAuth } from "../../contexts/AuthContext";
import { useMediaQuery } from "../../utils/useMediaQuery";

import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import Drawer from "./Drawer";

export default function Header({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { signOut } = useAuth();
  const { mobile, tablet, desktop } = useMediaQuery();

  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <Flex
      justify="space-between"
      w="100%"
      px="4"
      left={mobile ? 0 : 300}
      style={{
        width: mobile ? "100%" : "calc(100vw - 300px)",
        height: 90,
      }}
      align="center"
      position="fixed"
      bg="#FFF"
      zIndex={999}
      // boxShadow="rgba(0, 0, 0, 0.1) 0px 2px 2px"
    >
      <Flex align="center">
        <Image
          mb={-4}
          alt="psicare"
          mx="auto"
          src="/logo-icon.png"
          style={{
            width: 80,
            height: "auto",
          }}
        />
      </Flex>
      {!mobile && <Button mt={0.1} px={6} bg="transparent" label="Sair" onPress={signOut} />}
      {mobile && (
        <Icon
          mt="3"
          cursor="pointer"
          onClick={() => setSidebarOpened(true)}
          as={BiMenuAltRight}
          color="#C760EB"
          fontSize="3rem"
        />
      )}
      <Drawer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpened={sidebarOpened}
        setSidebarOpened={setSidebarOpened}
      />
    </Flex>
  );
}
