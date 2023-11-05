import { Save, West } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function UserCreate() {
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" marginBottom={2}>
                  Add User
                </Typography>
                <Stack spacing={3}>
                  <TextField
                    name="fullname"
                    label="Full Name"
                    type="text"
                    variant="outlined"
                  />
                  <TextField id="username-basic" label="Username" variant="outlined" />
                  <TextField id="password-basic" label="Password" type="password" variant="outlined" />
                </Stack>
              </CardContent>
              <CardActions>
                <Link to="../user">
                  <Button variant="outlined" size="small">
                    <West sx={{ mr: 1 }} />
                    Back
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ marginLeft: "10px" }}
                >
                  <Save sx={{ mr: 1 }} />
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default UserCreate;
