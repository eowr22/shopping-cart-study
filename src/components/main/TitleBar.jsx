import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  Container,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function TitleBar() {
  const {
    data: { info },
    cart: { total },
  } = useSelector((state) => state);

  return (
    <AppBar
      position="fixed"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="sm">
        <Toolbar style={{ background: "#28BAB6" }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {info?.merchant_name}
          </Typography>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">
              <ShoppingCartIcon />
            </Button>
            <Badge badgeContent={total.cnt} color="primary" showZero />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TitleBar;
