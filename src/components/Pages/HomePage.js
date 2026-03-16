import { Container } from "reactstrap";

// Components
import React from "react";
import Panner from "../Panner/Panner";
import MyNavbar from "../MyNavbar/MyNavbar";
import HeroSection from "../HeroSection/HeroSection";
import BrandsSection from "../BrandsSection/BrandsSection";
import BenefitsSection from "../BenefitsSection/BenefitsSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mb-5">
        <HeroSection />
        {/* <BrandsSection /> */}
        <BenefitsSection />
        {/* <CoursesSection /> */}
        <TestimonialsSection />
        <FAQSection />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
