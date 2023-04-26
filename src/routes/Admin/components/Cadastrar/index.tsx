import React from "react";

import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import Button from "../../../../components/Button";

export default function Cadastrar({
  cadastrarOpened,
  setCadastrarOpened,
}: {
  cadastrarOpened: boolean;
  setCadastrarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function Entidade({ iconImage, hoverImage, entidade }) {
    return (
      <Flex
        cursor="pointer"
        flexDir="column"
        align="center"
        justify="center"
        p="4"
        borderRadius={5}
        border="2px solid #C760EB"
        _hover={{
          backgroundColor: "#C760EB",
          color: "#FFF",
          transition: "0.4s",
        }}
        style={{
          height: 150,
          width: 150,
        }}
        color="#C760EB"
      >
        <Image
          alt={`Cadastrar ${entidade}`}
          src={iconImage}
          style={{
            height: 65,
            width: 65,
          }}
        />
        <Text>{entidade}</Text>
      </Flex>
    );
  }

  return (
    <>
      <Modal
        size="xl"
        isCentered
        isOpen={cadastrarOpened}
        onClose={() => setCadastrarOpened(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <Flex flexDir="column" p="8" pt="6">
            <Flex align="center" justify="space-between" w="100%">
              <Text color="#333" fontSize="2rem" mr="4">
                Novo cadastro
              </Text>
              <Button
                label="Voltar"
                onPress={() => setCadastrarOpened(false)}
                mt={0.1}
                filled
              />
            </Flex>
            <Flex mt="4" align="center" justify="space-between">
              <Entidade
                entidade="Professor"
                iconImage="/logo-icon.png"
                hoverImage="/logo-icon.png"
              />
              <Entidade
                entidade="Secretário"
                iconImage="/logo-icon.png"
                hoverImage="/logo-icon.png"
              />
              <Entidade
                entidade="Aluno"
                iconImage="/logo-icon.png"
                hoverImage="/logo-icon.png"
              />
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
