import Hero from "./Components/Hero";
// import Counter from "./Components/Counter";
import Testimonial from "./Components/Testimonial";
import About from "./Components/About";
import Enquiry from "./Components/Enquiry";
import EnquiryButton from "./Components/EnquiryButton";

export default function Home() {
  return (
    <div>
      <div id="home-section">
        <Hero />
      </div>
      <div id="about-section">
        {/* <Counter /> */}
        <About />
      </div>
      <div id="testimony-section">
        <Testimonial />
      </div>
      <div id="enquiry-section">
        <Enquiry />
      </div>
      <EnquiryButton />
    </div>
  );
}
