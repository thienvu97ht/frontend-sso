import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
