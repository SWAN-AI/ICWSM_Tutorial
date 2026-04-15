import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import "./FAQSection.css";

import rightArrow from "../../assets/icons/arrow_right.svg";

const accordionData = [
  {
    question: "What is this tutorial about?",
    answer:
      "This tutorial focuses on Knowledge-infused Multimodal Learning. It covers how Knowledge Graphs, Large Language Models, and Vision-Language Models can be combined to build AI systems that are more grounded, interpretable, and context-aware.",
  },
  {
    question: "Is this tutorial hands-on or lecture-based?",
    answer:
      "The tutorial is primarily hands-on, supported by lecture-style sessions. Participants will also work with guided notebooks and practical pipelines for knowledge graph construction and knowledge infusion into multimodal models.",
  },
  {
    question: "Do I need prior experience with Knowledge Graphs or Vision-Language Models?",
    answer:
      "No prior experience with Knowledge Graphs or Vision-Language Models is required. The tutorial is designed for researchers and practitioners with interests in knowledge representation, reasoning, language understanding, and deep learning.",
  },
  {
    question: "What topics will be covered during the tutorial?",
    answer:
      "The tutorial covers knowledge graph construction with LLMs, retrieval-augmented generation, prompt-based fusion, fine-tuning with external knowledge, and practical approaches for building knowledge-aware multimodal AI systems.",
  },
  {
    question: "What materials will participants receive?",
    answer:
      "Participants will receive guided Jupyter notebooks, curated datasets, code templates for retrieval-augmented generation, and step-by-step instructions for prompt-based knowledge infusion and fine-tuning workflows.",
  },
  {
    question: "What should I prepare before attending?",
    answer:
      "Participants are encouraged to bring a laptop with Python installed. GPU access is optional but recommended. Installation instructions and datasets will be shared at least two weeks before the event.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <section className="faqs container rounded-3 bg-white p-4 p-lg-5 mt-5">
      <>
        <Row className="g-4">
          <Col sm={4}>
            <h1>Frequently Asked Questions</h1>
            <p className="text-grey-20">
              Still you have any questions? Contact our Team via
              asaha8@student.gsu.edu
            </p>
            {/* <Button className="btn bg-white border-white-95 p-3 mt-3 text-black ">
              See All FAQ’s
            </Button> */}
          </Col>
          <Col sm={1}></Col>
          <Col sm={7}>
            <Accordion open={open} toggle={toggle} className="faqs">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  className="faq p-3 rounded-3 border-white-95 border-top"
                >
                  <AccordionHeader targetId={index.toString()}>
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody accordionId={index.toString()}>
                    <hr />
                    <p className="mb-5">{item.answer}</p>
                    {/* <div className="d-flex justify-content-center align-items-center bg-white-97 border-white-95 p-3 rounded-3">
                      <h6 className="d-inline">
                        Enrollment Process for Different tutorial
                      </h6>
                      <img
                        src={rightArrow}
                        alt=""
                        className="bg-white rounded-5 p-1 ms-auto"
                      />
                    </div> */}
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </>
    </section>
  );
};

export default FAQSection;
