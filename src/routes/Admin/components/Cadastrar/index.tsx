import React, { useState } from "react";

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
  const [entidadeHover, setEntidadeHover] = useState<string>();

  const [etapa, setEtapa] = useState<"">();

  function Entidade({ iconImage, hoverImage, entidade }) {
    return (
      <Flex
        onMouseOver={() => {
          setEntidadeHover(entidade);
        }}
        onMouseLeave={() => setEntidadeHover("")}
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
        color="#868686"
      >
        <Image
          alt={`Cadastrar ${entidade}`}
          src={entidadeHover === entidade ? hoverImage : iconImage}
          style={{
            height: 75,
            width: 75,
          }}
        />
        <Text mt="2" fontSize="1.2rem" fontWeight={600}>
          {entidade}
        </Text>
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
            <Flex mt="6" align="center" justify="space-between">
              <Entidade
                entidade="Professor"
                iconImage="/cadastro_professor.png"
                hoverImage="/cadastro_professor_hover.png"
              />
              <Entidade
                entidade="Secretário"
                iconImage="/customer-secretario.png"
                hoverImage="/customer-secretario_hover.png"
              />
              <Entidade
                entidade="Aluno"
                iconImage="/cadastro_aluno.png"
                hoverImage="/cadastro_aluno_hover.png"
              />
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
