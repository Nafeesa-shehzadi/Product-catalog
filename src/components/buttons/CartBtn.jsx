import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // MUI Icon

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none", // Removes the default underline
  color: theme.palette.primary.main, // Uses the primary color from the theme
}));

const CartBtn = () => {
  // We get a state of addItems
  const state = useSelector((state) => state.addItem);

  return (
    <StyledNavLink to="/cart">
      <Button
        variant="outlined"
        className="ms-2"
        startIcon={<ShoppingCartIcon />}
      >
        Cart ({state.length})
      </Button>
    </StyledNavLink>
  );
};

export default CartBtn;
