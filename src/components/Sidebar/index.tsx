import { Avatar, Flex, Icon, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import React from "react";
import { IoMdPerson, IoMdPeople } from "react-icons/io";
import { FaRegCalendar } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { useAuth } from "../../contexts/AuthContext";
import Greeting from "./Greeting";
import Item from "./Item";
import { RiContactsBookLine } from "react-icons/ri";

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
      {user && user.role === "admin" && (
        <Flex flexDir="column">
          <Greeting user={user} />
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
          <Item
            user={user}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
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
      )}
    </Flex>
  );
}
