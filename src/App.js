import CTA from "./components/CTA";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
