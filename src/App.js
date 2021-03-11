import "./styles.css";
import Footer from "./components/Footer";
import Home from "./views/Home";
import AlertBanner from "./components/AlertBanner";

export default function App() {
  return (
    <div className="App">
      <Home />
      <AlertBanner />
      <Footer />
    </div>
  );
}
