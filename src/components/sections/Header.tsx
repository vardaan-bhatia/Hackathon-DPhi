import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/images/YNOS435400.jpg";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        padding: "0 3rem 0",
        boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
        color: "black",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "3.5rem", height: "auto", marginRight: "0.5rem" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            DPhi
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
