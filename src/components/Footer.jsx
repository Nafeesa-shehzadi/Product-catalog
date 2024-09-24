import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "black",
  color: theme.palette.common.white,
  padding: theme.spacing(2, 4),
  textAlign: "center",
  position: "relative",
  height: "auto",
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
}));

const FooterButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="h6" gutterBottom>
        Product Catalog
      </Typography>
      <FooterLinks>
        <FooterButton href="/about">About Us</FooterButton>
        <FooterButton href="/contact">Contact</FooterButton>
        <FooterButton href="/privacy">Privacy Policy</FooterButton>
        <FooterButton href="/terms">Terms of Service</FooterButton>
      </FooterLinks>
      <Typography variant="body2">
        © {new Date().getFullYear()} Apple_Mart All rights reserved.
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
