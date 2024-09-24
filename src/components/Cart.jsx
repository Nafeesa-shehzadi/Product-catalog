import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { NavLink } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import Close icon
import { styled } from "@mui/system";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(5),
  py: theme.spacing(10),
  margin: theme.spacing(2, 5),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(5),
}));
const StyledImage = styled(CardMedia)(({ theme }) => ({
  height: 100, // Set height to a smaller value
  width: "auto", // Maintain aspect ratio
}));

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <StyledCard key={cartItem.id}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <StyledImage
              component="img"
              image={cartItem.img}
              alt={cartItem.title}
              height="200"
            />
          </Grid>
          <Grid item md={8}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{ textAlign: "left" }}
              >
                <Typography variant="h5">{cartItem.title}</Typography>
                <IconButton
                  onClick={() => handleClose(cartItem)}
                  aria-label="close"
                  sx={{ marginLeft: "auto" }} // Ensure icon is on the right
                >
                  <CloseIcon color="black" />
                </IconButton>
              </Box>
              <Typography variant="body1" className="fw-bold">
                ${cartItem.price}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </StyledCard>
    );
  };

  const emptyCart = () => {
    return (
      <StyledCard>
        <Box textAlign="center" py={5}>
          <Typography variant="h4">Your Cart is Empty</Typography>
        </Box>
      </StyledCard>
    );
  };

  const button = () => {
    return (
      <Box textAlign="center">
        <NavLink to="/checkout" style={{ textDecoration: "none" }}>
          <StyledButton variant="outlined" color="primary">
            Proceed To Checkout
          </StyledButton>
        </NavLink>
      </Box>
    );
  };

  return (
    <>
      {state.length === 0 ? emptyCart() : state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
