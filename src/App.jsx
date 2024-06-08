import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import HomeLayout from "./components/Layouts/HomeLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
