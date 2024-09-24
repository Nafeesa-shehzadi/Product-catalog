import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  styled,
} from "@mui/material";

// Styled components
const StyledContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  textAlign: "center",
}));

const StyledImage = styled("img")({
  height: "300px",
  width: "300px",
  objectFit: "cover",
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const Contact = () => {
  return (
    <StyledContainer>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 5 }}>
        Have Some Questions?
      </Typography>
      <hr />
      <Grid container spacing={4} justifyContent="center">
        <Grid item md={5}>
          <Box display="flex" justifyContent="center">
            <StyledImage src="/assets/images/contact.png" alt="Contact Us" />
          </Box>
        </Grid>
        <Grid item md={6}>
          <StyledForm component="form">
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="John Smith"
            />
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              placeholder="name@example.com"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={5}
            />
            <StyledButton type="submit" variant="outlined" color="primary">
              Send Message
            </StyledButton>
          </StyledForm>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Contact;
