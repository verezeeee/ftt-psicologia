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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
import { RiContactsBookLine } from "react-icons/ri";
import { FaRegCalendar } from "react-icons/fa";
import { SlNote } from "react-icons/sl";


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
  
  const router = useRouter();

  React.useEffect(() => {
    if (!mobile) {
      setSidebarOpened(false);
    }
  }, [mobile]);

  const handleItemClick = (newTab) => {
    if (newTab !== activeTab) {
      router.push("/");
    } else {
      setActiveTab(newTab);
      setSidebarOpened(false);
    }
  };

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

        {user && user.role === "admin" && (
          <Flex h="100%" flexDir="column" justify="space-between" px="4">
            <Flex flexDir="column">
              <Flex h="4" />
              <Item
              href="Agenda"
              icon={FaRegCalendar}
              user={user}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              />
              <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Icon as={RiContactsBookLine} fontSize="1.2em" color="#C760EB"  /> 
                  <Flex
                  flexDir='row'
                  w='100%'
                  justify='space-between'
                  >
                  <Text ml="3" color="#333" fontSize="1rem"> 
                  Cadastro 
                  </Text>
                  <AccordionIcon mt={0.5}/>
                  </Flex>
                </AccordionButton>
                <AccordionPanel pb={4}>
              <Item
                user={user}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sidebarOpened={sidebarOpened}
                setSidebarOpened={setSidebarOpened}
                href="Secretários"
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
              <Item
                user={user}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                sidebarOpened={sidebarOpened}
                setSidebarOpened={setSidebarOpened}
                href="Pacientes"
                icon={IoMdPerson}
              />
              </AccordionPanel>
              </AccordionItem>
              </Accordion>
              <Item
              href="Relatórios"
              icon={SlNote}
              user={user}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
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
