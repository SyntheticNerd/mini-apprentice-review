import Footer from "./components/footer/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className='App'>
      {/* We see that there are four major elements to the page, the nav, footer, hero section and testimonials.
      Each of these can and should be made into their own components. */}
      <Nav />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
