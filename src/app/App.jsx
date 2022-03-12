import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress, Container } from "@mui/material";

import { fetchInfo } from "../features/info/infoSlice";
import Category from "../components/main/category";
import TitleBar from "../components/main/TitleBar";

function App() {
  const dispatch = useDispatch();
  const {
    data: { info, status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchInfo());
  }, [dispatch]);

  return (
    <Container maxWidth="sm" style={{ marginTop: "6em" }}>
      <TitleBar />
      {status === "loading" ? (
        <div style={{ padding: "200px" }}>
          <CircularProgress size={100} />
        </div>
      ) : status === "success" ? (
        <div>
          <Category info={info} category="치킨" />
          <Category info={info} category="밥류" />
          <Category info={info} category="떡볶이" />
          <Category info={info} category="튀김" />
        </div>
      ) : (
        "failed"
      )}
    </Container>
  );
}

export default App;
