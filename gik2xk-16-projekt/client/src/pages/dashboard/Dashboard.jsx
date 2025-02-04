import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useContext, useMemo, useState } from "react";
import SideList from "./SideList";
import { ThemeProvider } from "@mui/system";
import { Container, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Brightness4, Brightness7 } from "@mui/icons-material";
import { AuthContext } from "../../App";
import LoginModal from "../../components/login/LoginModal";
import profileBg from "../../assets/img/bg-img/breadcumb2.jpg";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const { currentUser } = useContext(AuthContext);

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
        },
      }),
    [dark]
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  return (
    <>
      {currentUser && (
        <>
          {currentUser.isAdmin ? (
            <ThemeProvider >
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Tooltip title="Go back to home page">
                      <IconButton sx={{ mr: 1 }} onClick={() => navigate("/")}>
                        Home
                      </IconButton>
                    </Tooltip>
                    <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Dashboard
                    </Typography>
                    <IconButton onClick={() => setDark(!dark)}>
                      {dark ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <SideList {...{ open, setOpen }} />
              </Box>
            </ThemeProvider>
          ) : (
            <Typography>ACCESS DENIED</Typography>
          )}
        </>
      )}
      {!currentUser && (
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(${profileBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginModal />
        </Box>
      )}
    </>
  );
}
