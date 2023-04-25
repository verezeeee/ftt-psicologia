import { Table as TableNextUI } from "@nextui-org/react";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { User } from "../../utils/types";

export default function Table({
  headers,
  data,
}: {
  headers: string[];
  data: User[];
}) {
  const { mobile } = useMediaQuery();

  return (
    <TableNextUI
      color="secondary"
      aria-label="Example pagination  table"
      css={{
        height: "auto",
        minWidth: mobile ? "calc(100vw - 40px)" : "calc(100vw - 340px)",
      }}
      selectionMode="multiple"
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
              <TableNextUI.Cell>{data.cpf}</TableNextUI.Cell>
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
