import { Table as TableNextUI } from "@nextui-org/react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { User } from "../../utils/types";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiEdit, BiEditAlt } from "react-icons/bi";
import { FiEdit, FiEdit2, FiTrash2 } from "react-icons/fi";
import { formatarCPF } from "../../utils/cpf";

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
