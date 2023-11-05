import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Card,
  Container,
  Fab,
  Pagination,
  Stack,
  Switch,
  TablePagination,
  Typography,
} from "@mui/material";
import { Add, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

function createData(fullname, username, active) {
  return { fullname, username, active };
}

const rows = [
  createData("Frozen yoghurt", "admin", true),
  createData("Ice cream sandwich", "test", false),
];

export default function UserPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Users</Typography>
        <Button
          LinkComponent={Link}
          to="create"
          variant="contained"
          color="primary"
          startIcon={<Add />}
        >
          Add
        </Button>
      </Stack>
      <Card>
        <TableContainer sx={{ overflow: "unset" }}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell align="center">Active</TableCell>
                <TableCell align="center">Password</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.fullname}>
                    <TableCell component="th" scope="row">
                      {row.fullname}
                    </TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell align="center">
                      <Switch checked={row.active} />
                    </TableCell>
                    <TableCell align="center">
                      <Fab component={Link} size="small" color="secondary" aria-label="edit">
                        <Edit />
                      </Fab>
                    </TableCell>
                    <TableCell align="center">
                      <Fab LinkComponent={Link} size="small" to="create">
                        <Edit />
                      </Fab>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          page={page}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
