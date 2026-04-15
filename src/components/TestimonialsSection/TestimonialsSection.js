import React from "react";
import { Row, Col } from "reactstrap";
import TestimonialCard from "./TestimonialCard ";
import SectionHeader from "../UI/SectionHeader";

// Assets
import testimonial1Image from "../../assets/img/trilok.jpg";
import testimonial2Image from "../../assets/img/agnik.jpeg";
import testimonial3Image from "../../assets/img/ugur.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Trilok Padhi is a Ph.D. student in Computer Science, advised by Prof. Ugur Kursuncu. His research focuses on neurosymbolic multimodal learning to enhance knowledge grounding, reasoning, and interpretability of multimodal LLMs and agents. He has previously worked with Siemens, Rakuten, Nvidia, SRI International, and Bosch on AI-driven research and development.",
      author: "Trilok Padhi",
      image: testimonial1Image,
    },
    {
      text: "Agnik Saha is a Ph.D. student in Computer Science, advised by Prof. Ugur Kursuncu. His research focuses on advancing generative AI through knowledge representation, with applications in health and marketing. ",
      author: "Agnik Saha",
      image: testimonial2Image,
    },
    {
      text: "Ugur Kursuncu is an Assistant Professor at the Institute for Insight, Georgia State University, where he leads the SWAN AI Research Group. He was a Postdoctoral Fellow at the AI Institute, University of South Carolina. He received his Ph.D. in Computer Science from the University of Georgia. His research has focused on context-aware and knowledge-infused learning systems spanning the areas of Cyber Social Threats, Business, and Health informatics.",
      author: "Ugur Kursuncu",
      image: testimonial3Image,
    },
   
  ];

  const title = "Presenters' Biographies";
  const description =
    "";

  return (
    <>
      <SectionHeader title={title} description={description} />
      <section className="testimonials container my-5">
        <Row className="row-cols-1 row-cols-lg-2 g-3 g-lg-3">
          {testimonials.map((testimonial, index) => (
            <Col key={index} sm="6" lg="6">
              <TestimonialCard {...testimonial} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default TestimonialsSection;
