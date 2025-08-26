import "./App.css";
import DetailsPage from "./pages/Datails/Details";
import HomePage from "./pages/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/countries" element={<DetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
