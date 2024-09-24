import React from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close"; // Import the Close icon
import LoginIcon from "@mui/icons-material/Login"; // Use MUI Icons
import GoogleIcon from "@mui/icons-material/Google"; // MUI Google Icon
import FacebookIcon from "@mui/icons-material/Facebook"; // MUI Facebook Icon
const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  outline: "none",
  width: "400px", // Adjust width as needed
  position: "relative", // For close button positioning
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" startIcon={<LoginIcon />} onClick={handleOpen}>
        Login
      </Button>
      <StyledModal open={open} onClose={handleClose}>
        <StyledBox>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>

          <Typography variant="h6" component="h2" gutterBottom>
            Login
          </Typography>

          {/* Social sign-up buttons */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<GoogleIcon />} // MUI Google Icon
            sx={{ mb: 2 }}
          >
            Sign in With Google
          </Button>
          <Button
            variant="contained"
            fullWidth
            startIcon={<FacebookIcon />} // MUI Facebook Icon
            sx={{ mb: 2 }}
          >
            Sign in With Facebook
          </Button>

          <form>
            <TextField
              label="Email address"
              variant="outlined"
              fullWidth
              margin="normal"
              helperText="We'll never share your email with anyone else."
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Check me out"
              sx={{ marginY: 1 }}
            />

            <Button
              variant="outlined"
              fullWidth
              type="submit"
              sx={{ marginTop: 3 }}
            >
              Submit
            </Button>
          </form>
        </StyledBox>
      </StyledModal>
    </>
  );
};

export default Login;
