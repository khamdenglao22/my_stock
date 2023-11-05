import React from "react";

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
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";

function Nav() {
  return (
    <>
      <Paper
        sx={{
          width: 320,
          maxWidth: "100%",
          height: "calc(100vh - 64px)",
          borderRadius: 0,
        }}
      >
        <MenuList>
          <Link to="home" style={{ textDecoration: "none", color: "#000" }}>
            <MenuItem>
              <ListItemIcon>
                <Home fontSize="small" />
              </ListItemIcon>
              <ListItemText style={{ color: "#000" }}>Home</ListItemText>
              {/* <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography> */}
            </MenuItem>
          </Link>

          <Link to="product" style={{ textDecoration: "none", color: "#000" }}>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText style={{ color: "#000" }}>Products</ListItemText>
              {/* <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography> */}
            </MenuItem>
          </Link>

          <Link to="category" style={{ textDecoration: "none", color: "#000" }}>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText style={{ color: "#000" }}>Category</ListItemText>
              {/* <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography> */}
            </MenuItem>
          </Link>

          <Link
            to="user"
            style={{ textDecoration: "none", color: "#000" }}
            color="text.secondary"
          >
            <MenuItem>
              <ListItemIcon>
                <PeopleAlt fontSize="small" />
              </ListItemIcon>
              <ListItemText style={{ color: "#000" }}>User</ListItemText>
              {/* <Typography variant="body2" color="text.secondary">
                ⌘V
              </Typography> */}
            </MenuItem>
          </Link>

          {/* <Divider />
          <MenuItem>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem> */}
        </MenuList>
      </Paper>
    </>
  );
}

export default Nav;
