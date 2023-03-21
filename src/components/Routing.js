import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Reservation from "./pages/Booking";
import Confirmation from "./pages/BookingConfirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<Reservation />} />
      <Route path="/confirmed" element={<Confirmation />} />
    </Routes>
  );
}
