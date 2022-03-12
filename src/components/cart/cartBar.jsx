import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function CartBar() {
  return (
    <AppBar
      position="fixed"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="sm">
        <Toolbar style={{ backgroundColor: "#28BAB6" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit" component="div">
            Cart
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default CartBar;
