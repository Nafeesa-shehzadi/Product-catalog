import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, styled } from "@mui/material";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CenterMenu = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  fontSize: 20,
  margin: `0 ${theme.spacing(1)}`,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  "&.active": {
    color: theme.palette.primary.main,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  color: "inherit",
  textTransform: "none",
  fontSize: 20,
  padding: theme.spacing(1),
}));

const StyledLogo = styled("img")(({ theme }) => ({
  height: 80,
  width: "auto",
}));

const ActionButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2), // Small space between buttons
}));

const Header = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* Logo on the right */}
        <StyledNavLink to="/">
          <StyledLogo src="logo1.png" alt="logo" />
        </StyledNavLink>
        {/* Center the nav links */}
        <CenterMenu>
          {["Home", "Product", "About", "Contact"].map((text) => (
            <StyledNavLink to={`/${text.toLowerCase()}`} key={text}>
              <StyledButton>{text}</StyledButton>
            </StyledNavLink>
          ))}
        </CenterMenu>

        {/* Action buttons (login, signup, cart) */}
        <ActionButtons>
          <Login />
          <Signup />
          <CartBtn />
        </ActionButtons>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
