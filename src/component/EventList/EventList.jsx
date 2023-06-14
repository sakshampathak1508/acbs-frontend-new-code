import React from "react";

import { styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import moment from "moment";

import { StyledRouteLink } from "../styles/Styles";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  "&.MuiTableCell-root": {
    fontSize: "0.9rem",
  },
}));

const EventList = ({ data }) => {
  return (
    <TableContainer style={{ borderRadius: "5px" }} component={Paper}>
      <Table aria-label="customized table">
        <TableBody>
          {data &&
            data.map((row, index) => (
              <StyledTableRow key={row?.id}>
                <StyledTableCell
                  style={
                    index % 2
                      ? { background: "#ed1c24b3" }
                      : { background: "var(--red)" }
                  }
                  align="center"
                >
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <StyledRouteLink to={`/event/${row.id}/${row.slug}`}>
                    {row.name}
                  </StyledRouteLink>
                </StyledTableCell>

                <StyledTableCell align="right">
                  {moment(row?.start_date).format("MMMM DD, YYYY")}
                  {" - "}
                  {moment(row?.end_date).format("MMMM DD, YYYY")}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventList;
