import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { rows, tableHeaders } from "../../Data/cardDatas";
import "./style.scss";

/**
 * @param   {Object}  props  C'est l'objet props qui est passé au composant.
 *
 * @return  {React.ReactElement}         Une ligne de tableau avec une ligne réductible.
 */
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.date}
        </TableCell>
        {/* Premiere ligne de la modale */}
        <TableCell align="center">{row.description}</TableCell>
        <TableCell align="center">{row.amount}</TableCell>
        <TableCell align="center">{row.balance}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div>Transaction type: Electronic</div>
              <div>
                Category : Food <EditIcon style={{ cursor: "pointer" }} />
              </div>
              <div>
                Notes : <EditIcon style={{ cursor: "pointer" }} />
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * Il renvoie un div qui contient un tableau avec un en-tête de tableau et un corps de tableau
 *
 * @return  {React.ReactElement}
 */
function CollapsibleTable() {
  return (
    <div className="table_container">
      <TableContainer component={Paper} className="table_container__base">
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {/* titres du tableau principale */}
              <TableCell align="center"></TableCell>
              {tableHeaders.map((title, key) => {
                return (
                  <TableCell
                    key={key}
                    align="center"
                    style={{ fontWeight: "bold" }}
                  >
                    {title.name.toUpperCase()}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, key) => (
              <Row key={key} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CollapsibleTable;
