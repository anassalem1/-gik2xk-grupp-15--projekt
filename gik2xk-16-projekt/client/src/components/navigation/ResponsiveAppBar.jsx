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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DirectionsBike } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AuthContext } from "../../App";
import { useContext } from "react";
import LoginModal from "../../components/login/LoginModal";
import "../../assets/css/core-style.css";
import "../../assets/style.css";
const navLinkStyles = "text-white mx-4 text-2xl uppercase";

function ResponsiveAppBar({ numberOfItemsInCart }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { isLoggedIn, setIsLoggedIn, setCurrentUser, currentUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

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

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <>
    
     <header className="header_area">
     <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
       {/* Classy Menu */}
       <nav className="classy-navbar" id="essenceNav">
         {/* Logo */}
         <a className="nav-brand" href="/"><img src="../src/assets/img/core-img/logo.png" alt="" /></a>
         {/* Navbar Toggler */}
         <div className="classy-navbar-toggler">
           <span className="navbarToggler"><span></span><span></span><span></span></span>
         </div>
         {/* Menu */}
         <div className="classy-menu">
           {/* close btn */}
           <div className="classycloseIcon">
             <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
           </div>
           {/* Nav Start */}
           <div className="classynav">
             <ul>
               <li><a href="/">Home</a></li>
               <li><a href={"/products"}>Shop</a></li>
             </ul>
           </div>
           {/* Nav End */}
         </div>
       </nav>

       {/* Header Meta Data */}
       <div className="header-meta d-flex clearfix justify-content-end">
         {/* Search Area */}
         <div className="search-area">
           <form action="#" method="post">
             <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
             <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
           </form>
         </div>
         {/* Favourite Area */}
         <div className="favourite-area">
         </div>
         {/* User Login Info */}
         <div className="user-login-info">
         {!isLoggedIn ? (
              <LoginModal />
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      
                      src={currentUser.photoUrl ? currentUser.photoUrl : ""}
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                   
                  }}
                  keepMounted
                  transformOrigin={{
                    
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      Profile
                    </Button>
                  </MenuItem>

                  {currentUser.isAdmin && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Button
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        Dashboard
                      </Button>
                    </MenuItem>
                  )}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button onClick={handleLogout}>Logout</Button>
                  </MenuItem>
                </Menu>
              </Box>
            )}
         </div>
         {/* Cart Area */}
         <div className="cart-area">
           <Box sx={{ maxWidth: "80px", mr: 5 }}>
              <Link
                className="  justify-center   "
                to="cart"
              >
                
                <ShoppingCartIcon />
                <Typography>{numberOfItemsInCart}</Typography>
              </Link>
            </Box>
         </div>
       </div>
     </div>
   </header>
   </>
  );
}
export default ResponsiveAppBar;
