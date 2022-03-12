import { useDispatch } from "react-redux";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import { addItem } from "../../features/cart/cartSlice";

function Item({ item }) {
  const dispatch = useDispatch();

  const onAdd = (item) => {
    dispatch(addItem(item));
  };

  return (
    <ListItem>
      <ListItemButton onClick={() => onAdd(item)} dense>
        <ListItemText
          sx={{ maxWidth: "25em" }}
          primaryTypographyProps={{ fontSize: "1.2em" }}
        >
          {item.name}
        </ListItemText>
        <ListItemText
          primary={
            "₩" +
            item.price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          }
          style={{ textAlign: "end" }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default Item;
