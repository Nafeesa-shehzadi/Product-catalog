import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { Box, Grid, Typography, Button, styled } from "@mui/material";

// Styled components
const StyledContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5, 7),
  padding: theme.spacing(5),
}));

const StyledImage = styled("img")({
  height: "400px",
  objectFit: "cover", // Keep the aspect ratio
});

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.fetchProducts.items);
  const product = products.find((x) => x.id.toString() === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <StyledContainer>
      <Grid container spacing={2}>
        <Grid item md={6} container justifyContent="center">
          <StyledImage src={product.img} alt={product.title} />
        </Grid>
        <Grid item md={6} container direction="column" justifyContent="center">
          <Typography variant="h2" component="h1" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5" color="text.secondary" my={2}>
            ${product.price}
          </Typography>
          <Typography variant="body">{product.desc}</Typography>
          <Button
            onClick={() => handleCart(product)}
            variant="outlined"
            color="primary"
            sx={{ mt: 3 }} // margin-top for spacing
          >
            {cartBtn}
          </Button>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default ProductDetail;
