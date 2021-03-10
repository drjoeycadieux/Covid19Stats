import "./styles.css";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Announcement from "./components/Announcement";
import Button from "./components/Button";
import AlertBanner from "./components/AlertBanner";
import Charts from "./components/Charts";
import FaqUser from "./components/FaqUser";

export default function App() {
  return (
    <div className="App">
      <AlertBanner />
      <Home />
      <br />
      <Announcement />
      <Charts />
      <FaqUser />
      <Button />
      <Footer />
    </div>
  );
}
