import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Radio,
  FormControlLabel,
  FormGroup,
  Checkbox,
  styled,
  Badge,
} from "@mui/material";

// Styled components
const StyledContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(5),
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const TotalText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
}));

const Checkout = () => {
  const state = useSelector((state) => state.addItem);
  let total = state.reduce((acc, item) => acc + item.price, 0);

  return (
    <StyledContainer>
      <Grid container spacing={5}>
        <Grid item md={7} lg={8}>
          <Typography variant="h4" gutterBottom>
            Billing Address
          </Typography>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  variant="outlined"
                  InputProps={{
                    startAdornment: <span>@</span>,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  fullWidth
                  label="Email (Optional)"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address 2 (Optional)"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  select
                  required
                  fullWidth
                  label="Country"
                  variant="outlined"
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  select
                  required
                  fullWidth
                  label="State"
                  variant="outlined"
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </TextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  label="Zip Code"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Shipping address is the same as my billing address"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Save this information for next time"
              />
            </FormGroup>

            <Typography variant="h4" gutterBottom>
              Payment
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Radio required name="paymentMethod" />}
                label="Credit Card"
              />
              <FormControlLabel
                control={<Radio name="paymentMethod" />}
                label="Debit Card"
              />
              <FormControlLabel
                control={<Radio name="paymentMethod" />}
                label="PayPal"
              />
            </FormGroup>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  label="Name on Card"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  label="Credit Card Number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  required
                  fullWidth
                  label="Expiration"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField required fullWidth label="CVV" variant="outlined" />
              </Grid>
            </Grid>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
              }}
            >
              Continue to Checkout
            </Button>
          </form>
        </Grid>
        <Grid item md={5} lg={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Your Cart
            <Badge badgeContent={state.length} color="primary" sx={{ ml: 2 }}>
              {/* The content of the badge will appear here */}
            </Badge>
          </Typography>
          <List>
            {state.map((item) => (
              <StyledListItem key={item.id}>
                <ListItemText primary={item.title} />
                <ListItemText secondary={`$${item.price}`} />
              </StyledListItem>
            ))}
            <StyledListItem>
              <ListItemText primary="Total (USD)" />
              <TotalText>${total.toFixed(2)}</TotalText>
            </StyledListItem>
          </List>

          <form>
            <TextField
              fullWidth
              placeholder="Promo code"
              variant="outlined"
              margin="normal"
            />
            <Button type="submit" variant="contained" color="secondary">
              Redeem
            </Button>
          </form>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Checkout;
