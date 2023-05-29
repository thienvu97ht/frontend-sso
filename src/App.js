import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "./redux/action/counterAction";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <Header />
      <Outlet />

      <div>Count: {count}</div>

      <button onClick={() => dispatch(increaseCounter())}>
        Increase Count
      </button>

      <button onClick={() => dispatch(decreaseCounter())}>
        Decrease Count
      </button>
    </div>
  );
};

export default App;
