import React from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material";
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

const StyledTableCell = styled(TableCell)(() => ({
  "&.MuiTableCell-root": {
    fontSize: "0.9rem",
  },
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
}));

// const useStyles = makeStyles({
//   table: {
//     minWidth: 320,
//     // maxWidth:"400px"
//   },
//   style_key: {
//     width: "8rem",
//     // padding:"5px",
//     border: "0",
//   },
//   latest_event: {
//     cursor: "pointer",
//     "&:hover": {
//       color: "rgb(13, 161, 255)",
//       cursor: "pointer",
//       transition: "color 500ms",
//     },
//   },
//   non_hoverable: { cursor: "pointer" },
// });

const EventList = ({ data }) => {
  return (
    <TableContainer style={{ borderRadius: "5px" }} component={Paper}>
      <Table aria-label="customized table">
        <TableBody>
          {data &&
            data.map((row, index) => (
              <StyledTableRow key={row?.id}>
                <StyledTableCell
                  // className={classes.style_key}
                  style={
                    index % 2
                      ? { background: "#ed1c24b3" }
                      : { background: "var(--red)" }
                  }
                  align="left"
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
