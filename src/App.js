import logo from "./logo.svg";
import "./App.css";
import Hero from "./componets/Hero";
import Nav from "./componets/Nav/Nav";
import Footer from "./componets/Footer";
import Intro from "./componets/Intro/Intro";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero className="absolute top-5 right-5 z-10" />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
