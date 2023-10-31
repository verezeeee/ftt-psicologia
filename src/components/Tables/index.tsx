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
import Link from "next/link";
import styles from "./Tables.module.css"



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
  type: "aluno" | "secretario" | "professor" | "paciente"
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
        { data && Array.isArray(data) && data.map((user: any) => {
          if (type === "aluno") {
            return (
              <TableNextUI.Row key={user.role} >
                <TableNextUI.Cell key={user.nome}><Link href={`/view/${type}/${user._id}`}>{user.nome}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.email}><Link href={`/view${user._id}`}>{user.email}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.cpf}><Link href={`/view/${user._id}`}>{formatarCPF(user.cpf)}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.periodo}><Link href={`/view/${user._id}`}>{user.periodo}</Link></TableNextUI.Cell>
              </TableNextUI.Row>
            );
          } else if (type === "secretario") {
            return (
              <TableNextUI.Row key={user.role}>
                <TableNextUI.Cell key={user.nome}><Link href={`/view/${type}/${user._id}`}>{user.nome}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.email}><Link href={`/view/${user._id}`}>{user.email}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.cpf}><Link href={`/view/${user._id}`}>{formatarCPF(user.cpf)}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.turno}><Link href={`/view/${user._id}`}>{user.turno}</Link></TableNextUI.Cell>
              </TableNextUI.Row>
            )
          } else if (type === "professor") {
            return (
              <TableNextUI.Row key={user.role}>
                <TableNextUI.Cell key={user.nome}><Link href={`/view/${type}/${user._id}`}>{user.nome}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.cpf}><Link href={`/view/${type}/${user._id}`}>{formatarCPF(user.cpf)}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.telefoneContato}>
                <Link href={`/view/${type}/${user._id}`}>{formatarTelefone(user.telefoneContato)}</Link>
                </TableNextUI.Cell>
              </TableNextUI.Row>
            )
          } else if (type === "paciente") {
            return (
              <TableNextUI.Row key={user.role}>
                <TableNextUI.Cell key={user.nome}><Link href={`/view/${type}/${user._id}`}>{user.nome}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.cpf}><Link href={`/view/${type}/${user._id}`}>{formatarCPF(user.cpf)}</Link></TableNextUI.Cell>
                <TableNextUI.Cell key={user.Tratamento}>
                <Link href={`/view/${type}/${user._id}`}>{user.tratamento}</Link>
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
