import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import HomePage from "./pages/HomePage";
import * as userEvent from "@testing-library/user-event";
import BookingForm from "./components/BookingForm";


const availableTimes =  ["16:00", "17:30", "18:50", "19:00", "20:00", "21:00"];

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} getAvailableTimes={()=>{}} setFormData={()=>{}} />
    </Router>
  );
  const headingElement = screen.getByText("Book Table Now");
  expect(headingElement).toBeInTheDocument();
});

test("Check homepage for Render", () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );
  const headingElement = screen.getAllByText("Little Lemon")[0];
  expect(headingElement).toBeInTheDocument();
});

test("check  Available Times", () => {
  expect(availableTimes[0]).toBe("16:00");
});

test("it should test Date", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} getAvailableTimes={()=>{}} setFormData={()=>{}}/>
    </Router>
  );

  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
