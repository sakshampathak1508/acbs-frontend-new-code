import React from "react";
import { Link } from "react-router-dom";

import { TableHead, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
// import { withStyles, makeStyles } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import moment from "moment";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-root": {
    fontSize: "1rem",
  },
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
}));

const StyledTableCell = styled(TableCell)(() => ({
  "&.MuiTableCell-root": {
    fontSize: "1rem",
    fontWeight: 600,
  },
}));

const EventTable = ({ data }) => {
  console.log("NEWS", data);
  return (
    <TableContainer style={{ borderRadius: "5px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableHeadCell sx={{ maxWidth: "3rem" }}>
              S.No
            </StyledTableHeadCell>
            <StyledTableHeadCell>Event Name</StyledTableHeadCell>
            <StyledTableHeadCell>Event Start Date</StyledTableHeadCell>
            <StyledTableHeadCell>Event End Date</StyledTableHeadCell>
            <StyledTableHeadCell>Event Location</StyledTableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data &&
            data.map((row, index) => (
              <>
                <StyledTableRow key={row?.id}>
                  <StyledTableCell
                    align="center"
                    style={
                      index % 2
                        ? { background: "#ed1c24b3" }
                        : { background: "var(--red)" }
                    }
                  >
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    component={Link}
                    sx={{
                      all: "reset",
                      textDecoration: "none",
                      "&:hover": { color: "var(--red)" },
                    }}
                    to={`/event/${row.id}/${row.slug}`}
                    align="left"
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell>
                    {moment(row?.start_date).format("MMMM DD, YYYY")}
                  </StyledTableCell>
                  <StyledTableCell>
                    {moment(row?.end_date).format("MMMM DD, YYYY")}
                  </StyledTableCell>
                  <StyledTableCell>{row?.location}</StyledTableCell>
                </StyledTableRow>
              </>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventTable;
