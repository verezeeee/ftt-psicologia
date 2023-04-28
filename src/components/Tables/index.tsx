import { Table as TableNextUI } from "@nextui-org/react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { User } from "../../utils/types";
import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiEdit, BiEditAlt } from "react-icons/bi";
import { FiEdit, FiEdit2, FiTrash2 } from "react-icons/fi";
import { formatarCPF } from "../../utils/cpf";
import { formatarTelefone } from "../../utils/formatarTelefone";

import { IoLogoWhatsapp } from "react-icons/io";
import { useRouter } from "next/router";

export default function Table({
  headers,
  data,
  isEditing,
  setIsEditing,
}: {
  headers: string[];
  data: User[];
  isEditing: any;
  setIsEditing: any;
}) {
  const { mobile } = useMediaQuery();

  const router = useRouter();

  return (
    <TableNextUI
      color="secondary"
      shadow={false}
      css={{
        width: mobile ? "calc(100vw - 40px)" : "calc(100vw - 350px)",
        paddingRight: mobile ? 10 : 30,
      }}
    >
      <TableNextUI.Header>
        {headers.map((header) => {
          return <TableNextUI.Column>{header}</TableNextUI.Column>;
        })}
      </TableNextUI.Header>
      <TableNextUI.Body>
        {data.map((data, i) => {
          return (
            <TableNextUI.Row key={i}>
              <TableNextUI.Cell>{data.id}</TableNextUI.Cell>
              <TableNextUI.Cell>{data.nome}</TableNextUI.Cell>
              <TableNextUI.Cell>
                {formatarCPF(String(data.cpf))}
              </TableNextUI.Cell>
              {data.role === "secretary" ? (
                <TableNextUI.Cell>{data.turno}</TableNextUI.Cell>
              ) : data.role === "professor" ? (
                <TableNextUI.Cell>
                  <Flex align="center">
                    <Text>{formatarTelefone(String(data.telefone))}</Text>
                    <Icon
                      cursor="pointer"
                      onClick={() => {
                        router.push(`https://wa.me/55${data.telefone}`);
                      }}
                      ml="2"
                      as={IoLogoWhatsapp}
                      color="#075E54"
                    />
                  </Flex>
                </TableNextUI.Cell>
              ) : null}
              <TableNextUI.Cell>
                <Icon
                  cursor="pointer"
                  onClick={() => setIsEditing(data)}
                  as={FiEdit2}
                  color="#C760EB"
                />
                <Icon cursor="pointer" ml="4" as={FiTrash2} color="#C760EB" />
              </TableNextUI.Cell>
            </TableNextUI.Row>
          );
        })}
      </TableNextUI.Body>
      <TableNextUI.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={10}
        onPageChange={(page) => console.log({ page })}
      />
    </TableNextUI>
  );
}
