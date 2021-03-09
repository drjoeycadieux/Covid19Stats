import "./styles.css";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Announcement from "./components/Announcement";
import Button from "./components/Button";
import AlertBanner from "./components/AlertBanner";

export default function App() {
  return (
    <div className="App">
      <AlertBanner />
      <Home />
      <br />
      <Announcement />

      <Button />

      <h1> Covid-19 Stats</h1>
      <iframe
        width="800"
        height="600"
        frameborder="0"
        allowfullscreen
        src="https://arcg.is/0m9Syr"
      ></iframe>
      <Footer />
    </div>
  );
}
