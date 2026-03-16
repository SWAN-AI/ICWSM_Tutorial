import { Row } from "reactstrap";

import SectionHeader from "../UI/SectionHeader";
import BenefitCard from "./BenefitCard";

const BenefitsSection = () => {
  const benefitsData = [
    {
      number: "01",
      title: "Knowledge Graph Construction",
      description:
        "We begin by tracing the evolution of KG construction from traditional, hand-crafted workflows to modern, LLM-augmented pipelines.",
    },
    {
      number: "02",
      title: "Infusing Knowledge into Large VLMs",
      description:
        "Retrieval-Augmented Generation (RAG), Prompt-Based Fusion, Fine-Tuning-Based Knowledge Injection",
    },
    {
      number: "03",
      title: "Hands-on Session on Infusing Knowledge",
      description:
        "This session provides participants with practical experience implementing three key strategies for knowledge infusion into VLMs, using guided notebooks and curated datasets",
    },
  ];

  const title = "Tutorial Content";
  const description =
    "This tutorial is structured around three core modules, each focusing on constructing and bridging symbolic knowledge with modern neural representations.";

  return (
    <>
      <SectionHeader title={title} description={description} />
      <section className="benefits container mt-3">
        <Row className="row-cols-1 row-cols-lg-3 row-cols-md-2 g-3 g-lg-3">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              number={benefit.number}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </Row>
      </section>
    </>
  );
};

export default BenefitsSection;
