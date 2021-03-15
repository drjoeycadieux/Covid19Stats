import "./styles.css";
import Footer from "./components/Footer";
import Home from "./views/Home";
import AlertBanner from "./components/AlertBanner";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="App">
      <Home />
      <AlertBanner />
      <Card />
      <Footer />
    </div>
  );
}
