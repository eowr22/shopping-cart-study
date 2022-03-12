import { useSelector } from "react-redux";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

import Item from "./item";
import CartBar from "./cartBar";

function Cart() {
  const {
    cart: { items, total },
  } = useSelector((state) => state);
  const arrItems = Object.entries(items);

  return (
    <Container maxWidth="sm" style={{ marginTop: "6em" }}>
      <CartBar />
      {arrItems.length === 0
        ? "추가된 상품이 없습니다."
        : arrItems.map((item, i) => {
            return <Item key={i} itemInfo={item} />;
          })}
      <AppBar
        position="sticky"
        sx={{ top: "auto" }}
      >
        <Toolbar style={{ backgroundColor: "#28BAB6" }}>
          <Box display="flex" width="100%" justifyContent={"space-between"}>
            <Box>총 주문금액</Box>
            <Box>
              ₩&nbsp;
              {total.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Cart;
