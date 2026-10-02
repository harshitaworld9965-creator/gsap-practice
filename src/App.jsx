import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App(){
  return (
    <main className="page">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}

export default App;