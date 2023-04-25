import { Table as TableNextUI } from "@nextui-org/react";
import { useMediaQuery } from "../../utils/useMediaQuery";

export default function Table() {
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
        <TableNextUI.Column>ID</TableNextUI.Column>
        <TableNextUI.Column>NOME</TableNextUI.Column>
        <TableNextUI.Column>CPF</TableNextUI.Column>
        <TableNextUI.Column>TRATAMENTO</TableNextUI.Column>
      </TableNextUI.Header>
      <TableNextUI.Body>
        <TableNextUI.Row key="1">
          <TableNextUI.Cell>1</TableNextUI.Cell>
          <TableNextUI.Cell>Tony Reichert</TableNextUI.Cell>
          <TableNextUI.Cell>371.273.384-83</TableNextUI.Cell>
          <TableNextUI.Cell>TDAH</TableNextUI.Cell>
        </TableNextUI.Row>
        <TableNextUI.Row key="2">
          <TableNextUI.Cell>2</TableNextUI.Cell>
          <TableNextUI.Cell>Tony Reichert</TableNextUI.Cell>
          <TableNextUI.Cell>371.273.384-83</TableNextUI.Cell>
          <TableNextUI.Cell>TDAH</TableNextUI.Cell>
        </TableNextUI.Row>
        <TableNextUI.Row key="3">
          <TableNextUI.Cell>3</TableNextUI.Cell>
          <TableNextUI.Cell>Tony Reichert</TableNextUI.Cell>
          <TableNextUI.Cell>371.273.384-83</TableNextUI.Cell>
          <TableNextUI.Cell>TDAH</TableNextUI.Cell>
        </TableNextUI.Row>
        <TableNextUI.Row key="4">
          <TableNextUI.Cell>4</TableNextUI.Cell>
          <TableNextUI.Cell>Tony Reichert</TableNextUI.Cell>
          <TableNextUI.Cell>371.273.384-83</TableNextUI.Cell>
          <TableNextUI.Cell>TDAH</TableNextUI.Cell>
        </TableNextUI.Row>
        <TableNextUI.Row key="5">
          <TableNextUI.Cell>5</TableNextUI.Cell>
          <TableNextUI.Cell>Tony Reichert</TableNextUI.Cell>
          <TableNextUI.Cell>371.273.384-83</TableNextUI.Cell>
          <TableNextUI.Cell>TDAH</TableNextUI.Cell>
        </TableNextUI.Row>
        <TableNextUI.Row key="6">
          <TableNextUI.Cell>6</TableNextUI.Cell>
          <TableNextUI.Cell>Tony Reichert</TableNextUI.Cell>
          <TableNextUI.Cell>371.273.384-83</TableNextUI.Cell>
          <TableNextUI.Cell>TDAH</TableNextUI.Cell>
        </TableNextUI.Row>
      </TableNextUI.Body>
      <TableNextUI.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={3}
        onPageChange={(page) => console.log({ page })}
      />
    </TableNextUI>
  );
}
