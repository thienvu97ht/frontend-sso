import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { doGetAccount } from "./redux/action/accountAction";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import axios from "./customize/axios";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.account.userInfo);
  const isLoading = useSelector((state) => state.account.isLoading);

  useEffect(() => {
    if (user && !user.access_token) {
      dispatch(doGetAccount());
    }
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      await axios.get("http://localhost:8081/health").then((res) => {
        console.log("🏆 ~ axios.get ~ res:", res);
      });
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div style={style}>
          <HashLoader color="#36d7b7" loading={true} size={100} />
        </div>
      ) : (
        <div className="App">
          <Header />
          <Outlet />
        </div>
      )}
    </>
  );
};

export default App;
