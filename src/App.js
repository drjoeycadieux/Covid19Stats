import "./styles.css";
import Footer from "./components/Footer";
import Home from "./views/Home";
import ContentContainer from "./components/ContentContainer";

export default function App() {
  return (
    <div className="App">
      <Home />
      <br />
      <ContentContainer />
      <br />
      <Footer />
    </div>
  );
}
