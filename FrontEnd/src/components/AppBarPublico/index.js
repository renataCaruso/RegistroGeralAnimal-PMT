import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../image/logo-png.png";
import { createMuiTheme } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import styles from "./styles.css";

const settings = ["Cadastrar", "Editar cadastro", "Visualizar RGA", "Sair"];

const NavBarPublico = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const { user } = useContext(AuthContext);
  // const { setUser } = useContext(AuthContext);
  // localStorage.setItem("user", JSON.stringify(loggedUser));
  // setUser(user)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgb(45, 82, 153)",
      },
    },
  });

  return (
    <AppBar position="static" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            width="200px"
            style={{
              justifyContent: "center",
              alignSelf: "center",
              flexDirection: "column",
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBarPublico;
