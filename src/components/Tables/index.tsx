import { Table as TableNextUI } from "@nextui-org/react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { User } from "../../utils/types";
import { formatarCPF } from "../../utils/formatarCPF";
import React from "react";

export default function Table({
  headers,
  data,
}: {
  headers: string[];
  data: User[];
}) {
  const { mobile } = useMediaQuery();

  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);

  return (
    <TableNextUI
      color="secondary"
      bordered={false}
      shadow={false}
      css={{
        width: mobile ? "calc(100vw - 40px)" : "calc(100vw - 350px)",
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
              <TableNextUI.Cell>TDAH</TableNextUI.Cell>
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
