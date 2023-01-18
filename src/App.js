import logo from "./logo.svg";
import "./App.css";
import Hero from "./componets/Hero/Hero";
import Nav from "./componets/Nav/Nav";
import Footer from "./componets/Footer";
import Intro from "./componets/Intro/Intro";
import Pay from "./componets/Pay/Pay";
import Copy from "./componets/Copy/Copy";
import Contact from "./componets/Contact/Contact";
import Learn from "./componets/Learn/Learn";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero className="absolute top-5 right-5 z-10" />
      <Pay className="mb-5" />
      <Copy />
      <Contact />
      <Learn />
      <Footer />
    </div>
  );
}

export default App;
