import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./views/Features";
import Home from "./views/Home";
import Announcement from "./components/Announcement";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <br />
      <Announcement />

      <h1> Covid-19 Stats</h1>

      <Features />
      <Footer />
    </div>
  );
}
