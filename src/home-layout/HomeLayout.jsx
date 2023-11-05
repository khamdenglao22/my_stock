import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import Cloud from "@mui/icons-material/Cloud";
// import Link from "@mui/material/Link";
import Nav from "../components/Nav";
import Home from "../pages/Home";

// router
import { Outlet, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function HomeLayout() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accToken = localStorage.getItem("accToken");
    const initialValue = JSON.parse(accToken);
    setToken(initialValue);

    if (!accToken) {
      navigate("/login");
    }
  }, []);

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
        <div>
          <Header />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={0} columnSpacing={0}>
              <Grid item xs={2}>
                <Nav />
              </Grid>
              <Grid item xs={10} className="main">
                <Outlet />
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </>
  );
}

export default HomeLayout;
