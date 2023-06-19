import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Code from "./components/Code/Code";
import "./index.scss";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import AppRoute from "./routes/AppRoute";
import Home from "./components/Home/Home";
import PrivateRoutes from "./routes/PrivateRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppRoute />}>
            <Route path="/" index element={<Home />} />
            <Route
              path="/weather"
              element={
                <PrivateRoutes>
                  <About />
                </PrivateRoutes>
              }
            />
          </Route>
          <Route path="/code" element={<Code />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
