import React from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GoogleIcon from "@mui/icons-material/Google"; // MUI Google Icon
import FacebookIcon from "@mui/icons-material/Facebook"; // MUI Facebook Icon
import { styled } from "@mui/system";

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
  position: "relative", // For positioning the close button
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const Signup = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<PersonAddIcon />}
        onClick={handleOpen}
      >
        Register
      </Button>

      <StyledModal open={open} onClose={handleClose}>
        <StyledBox>
          <CloseButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </CloseButton>

          {/* Social sign-up buttons */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<GoogleIcon />} // MUI Google Icon
            sx={{ mb: 2 }}
          >
            Sign up With Google
          </Button>
          <Button
            variant="contained"
            fullWidth
            startIcon={<FacebookIcon />} // MUI Facebook Icon
            sx={{ mb: 2 }}
          >
            Sign up With Facebook
          </Button>

          {/* Form */}
          <form>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
            />
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
            <FormControlLabel control={<Checkbox />} label="Check me out" />

            <Button variant="outlined" fullWidth type="submit" sx={{ mt: 2 }}>
              Register
            </Button>
          </form>
        </StyledBox>
      </StyledModal>
    </>
  );
};

export default Signup;
