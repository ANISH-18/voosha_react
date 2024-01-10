import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import AddOrder from "./components/AddOrder";
import DisplayOrder from "./components/DisplayOrder";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/get-order" element={<DisplayOrder />} />
        <Route path="/add-order" element={<AddOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
