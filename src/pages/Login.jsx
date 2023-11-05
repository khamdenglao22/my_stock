import React, { useEffect } from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const accToken = localStorage.getItem("accToken");
    const initialValue = JSON.parse(accToken);
    setToken(initialValue);
    if (accToken) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    if (inputs.username == "admin" && inputs.password == 123) {
      const token = "kham";
      localStorage.setItem("accToken", JSON.stringify(token));
      navigate("/");
    }
  };

  return (
    <>
      {token == "" ? (
        <Box
          sx={{
            height: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ fontSize: "22px" }} />
        </Box>
      ) : (
        <Box sx={{ height: 1 }}>
          <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
            <Card
              sx={{
                p: 5,
                width: 1,
                maxWidth: 420,
              }}
            >
              <Stack spacing={3} marginBottom={3}>
                <TextField
                  name="username"
                  label="User Name"
                  value={inputs.username || ""}
                  onChange={handleChange}
                />

                <TextField
                  name="password"
                  label="Password"
                  value={inputs.password || ""}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Card>
          </Stack>
        </Box>
      )}
    </>
  );
}

export default Login;
