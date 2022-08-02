import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../../image/logo-png.png";
import { Button, createMuiTheme } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  // const { setUser } = useContext(AuthContext);
  // localStorage.setItem("user", JSON.stringify(loggedUser));
  // setUser(user)

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgb(45, 82, 153)",
      },
      secondary: {
        main: "rgb(237, 50, 55)",
      },
    },
  });

  return (
    <AppBar position="static" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} width="200px" />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Typography sx={{ marginRight: "10px" }}>
            Olá, {user.email}!
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Button color="error" onClick={logout} textAlign="center">
              SAIR
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
