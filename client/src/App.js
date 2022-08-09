import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import HotelsList from "./pages/HotelsListPage/HotelsList";
import Hotel from "./pages/HotelPage/Hotel";
import "./App.css";
import Layout from "./components/molecules/Layout/Layout";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hotels" element={<HotelsList />} />
          <Route path="/hotels/:hotelId" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
