import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link, Navigate } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const columns = [
  { field: "fullName", headerName: "Full Name", width: 300 },
  { field: "username", headerName: "User Name", width: 200 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "password",
    headerName: "Password",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
  },
  
];

const rows = [
  { id: 1, fullName: "Snow", username: "Jon", age: 35,password:123,action:"edit" },
  { id: 2, fullName: "Lannister", username: "Cersei", age: 42,password:123,action:"edit" },
  { id: 3, fullName: "Lannister", username: "Jaime", age: 45,password:123,action:"edit" },
];

function User() {
  return (
    <>
      <Paper sx={{ borderRadius: 0, margin: "20px", boxShadow: 0 }}>
        <Box>
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid item xs={12} sx={{ marginBottom: "16px" }}>
              <Card>
                <CardContent>
                  <Box>
                    <Link to="create">
                      <Button variant="contained" >
                        <Add sx={{ mr: 1 }} />
                        Add
                      </Button>
                    </Link>
                  </Box>
                  <Box sx={{ marginTop: "20px" }}>
                    <div style={{ height: "470px", width: "100%" }}>
                      <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                          pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                          },
                        }}
                        pageSizeOptions={[10, 50]}
                        // checkboxSelection
                        disableRowSelectionOnClick
                      />
                    </div>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default User;
