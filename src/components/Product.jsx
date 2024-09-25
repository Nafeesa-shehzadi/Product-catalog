import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector
import {
  Box,
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  styled,
} from "@mui/material";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400, // Set a max width for the card
  margin: theme.spacing(2), // Margin around cards
}));

const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  textAlign: "center",
  margin: theme.spacing(5),
}));

const StyledGrid = styled(Grid2)(({ theme }) => ({
  justifyContent: "center",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%", // Full width button
}));

const Product = () => {
  const products = useSelector((state) => state.fetchProducts.items); // Access products from the Redux store

  const cardItem = (item) => {
    return (
      <StyledCard key={item.id}>
        <CardMedia
          component="img"
          alt={item.title}
          height="200"
          image={item.img}
        />
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            {item.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            ${item.price}
          </Typography>
          <NavLink
            to={`/products/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            <StyledButton variant="outlined" color="primary">
              Buy Now
            </StyledButton>
          </NavLink>
        </CardContent>
      </StyledCard>
    );
  };

  return (
    <StyledBox>
      <Typography variant="h4">Product</Typography>
      <hr />
      <StyledGrid container>{products.map(cardItem)}</StyledGrid>
    </StyledBox>
  );
};

export default Product;
