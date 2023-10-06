import { Table as TableNextUI } from "@nextui-org/react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { AlunoSignUpData, ProfessorSignUpData, SecretarioSignUpData } from "../../utils/types";
import React from "react";
import { useEffect, useState } from "react";
import { Icon } from "@chakra-ui/react";
import { BiEdit, BiEditAlt } from "react-icons/bi";
import { FiEdit, FiEdit2, FiTrash2 } from "react-icons/fi";
import { formatarCPF } from "../../utils/cpf";
import axios from "axios";
import { formatarTelefone } from "../../utils/formatarTelefone";

export default function Table({
  headers,
  data,
  isEditing,
  setIsEditing,
  type
}: {
  headers: string[];
  data: AlunoSignUpData[] | ProfessorSignUpData[] | SecretarioSignUpData[];
  isEditing: any;
  setIsEditing: any;
  type: "aluno" | "secretario" | "professor"
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
        {data?.map((user: any) => {
          if (type === "aluno") {
            return (
              <TableNextUI.Row key={user.role}>
                <TableNextUI.Cell key={user.nome}>{user.nome}</TableNextUI.Cell>
                <TableNextUI.Cell key={user.email}>{user.email}</TableNextUI.Cell>
                <TableNextUI.Cell key={user.cpf}>{formatarCPF(user.cpf)}</TableNextUI.Cell>
                <TableNextUI.Cell key={user.periodo}>{user.periodo}</TableNextUI.Cell>
              </TableNextUI.Row>
            );
          } else if (type === "secretario") {
            return (
              <TableNextUI.Row key={user.role}>
                <TableNextUI.Cell key={user.nome}>{user.nome}</TableNextUI.Cell>
                <TableNextUI.Cell key={user.email}>{user.email}</TableNextUI.Cell>
                <TableNextUI.Cell key={user.cpf}>{formatarCPF(user.cpf)}</TableNextUI.Cell>
                <TableNextUI.Cell key={user.turno}>{user.turno}</TableNextUI.Cell>
              </TableNextUI.Row>
            )
          } else if (type === "professor") {
            return (
              <TableNextUI.Row key={user.role}>
                <TableNextUI.Cell key={user.nome}>{user.nome}</TableNextUI.Cell>
                <TableNextUI.Cell key={user.cpf}>{formatarCPF(user.cpf)}</TableNextUI.Cell>
                <TableNextUI.Cell key={user.telefoneContato}>
                  {formatarTelefone(user.telefoneContato)}
                </TableNextUI.Cell>
              </TableNextUI.Row>
            )
          }
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
