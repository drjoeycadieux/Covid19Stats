import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Features from "./views/Features";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Carousel />

      <h1> Covid-19 Stats</h1>

      <Features />
      <Footer />
    </div>
  );
}
