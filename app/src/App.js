import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <main>
      {/* <Navbar /> */}
      <Routing />
      </main>
      <Footer />
    </>
  );
}

export default App;
