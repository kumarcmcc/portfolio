import AboutMe from "../AboutMe";
import Carusel from "../Carusel";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import NavBar from "../NavBar";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Carusel />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
