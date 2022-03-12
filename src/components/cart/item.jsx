import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";

import {
  deleteItem,
  increaseCnt,
  decreaseCnt,
} from "../../features/cart/cartSlice";

function Item({ itemInfo }) {
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseCnt(itemInfo));
  };
  const onDecrease = () => {
    dispatch(decreaseCnt(itemInfo));
  };
  const onDelete = () => {
    dispatch(deleteItem(itemInfo));
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemText
          sx={{maxWidth: '25em'}}
          primary={itemInfo[0]}
          secondary={
            "₩" +
            itemInfo[1].price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
          }
          style={{marginRight: '1em'}}
        />
        <Box sx={{ width: "20%" }}>
          <Button
            sx={{ border: 1, borderColor: "#28BAB6" }}
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px",
            }}
            onClick={onDecrease}
          >
            <Remove sx={{ color: "black" }} />
          </Button>
          <span style={{ margin: ".5em" }}>{itemInfo[1].cnt}</span>
          <Button
            sx={{ border: 1, borderColor: "#28BAB6" }}
            style={{
              maxWidth: "30px",
              maxHeight: "30px",
              minWidth: "30px",
              minHeight: "30px",
            }}
            onClick={onIncrease}
          >
            <Add sx={{ color: "black" }} />
          </Button>
          <Button
            onClick={onDelete}
            sx={{ color: "gray" }}
            style={{ left: "2.7em" }}
          >
            <Close />
          </Button>
        </Box>
      </ListItem>
    </List>
  );
}

export default Item;
