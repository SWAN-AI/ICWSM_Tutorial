import React from "react";
import "./App.css";
import trilokImage from "./assets/img/tp1.png";
import agnikImage from "./assets/img/agnik.jpeg";
import ugurImage from "./assets/img/ugur.jpg";
import laBg from "./assets/img/la-bg.jpg";

const schedule = [
  {
    time: "Hour 1",
    title: "Introduction to Knowledge-Infused Multimodal Learning",
    details:
      "Motivation, limitations of LLMs/VLMs, hallucination, factual grounding, and the role of symbolic knowledge.",
  },
  {
    time: "Hour 2",
    title: "Knowledge Graph Construction with LLMs",
    details:
      "Ontology design, schema-free KG construction, instruction-tuned extraction, EDC, iText2KG, GLITTER, COMET, and competency questions.",
  },
  {
    time: "Hour 3",
    title: "Knowledge Infusion Techniques for Multimodal Models",
    details:
      "Retrieval-augmented generation, prompt-based fusion, tool use, and fine-tuning-based knowledge injection for VLMs.",
  },
  {
    time: "Hour 4",
    title: "Hands-on Session and Discussion",
    details:
      "Guided notebooks for KG retrieval, prompt-based fusion, KG-enriched fine-tuning examples, and open research challenges.",
  },
];

const modules = [
  {
    number: "01",
    title: "Knowledge Graph Construction",
    text:
      "We trace the evolution from hand-crafted ontology workflows to modern LLM-augmented KG construction pipelines, including schema-free extraction, relation canonicalization, and ontology induction.",
  },
  {
    number: "02",
    title: "Knowledge Infusion into Large VLMs",
    text:
      "We study how structured knowledge can improve multimodal reasoning through KG-based RAG, prompt-based fusion, and fine-tuning with external knowledge.",
  },
  {
    number: "03",
    title: "Hands-on Knowledge-Infused Multimodal Learning",
    text:
      "Participants will work with guided notebooks, curated datasets, KG triples, retrieval pipelines, and VLM prompts to build knowledge-aware multimodal systems.",
  },
];

const readings = [
  "Pan et al. 2024. Unifying Large Language Models and Knowledge Graphs: A Roadmap.",
  "Lewis et al. 2020. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.",
  "Hu et al. 2023. REVEAL: Retrieval-Augmented Visual-Language Pre-Training with Multi-Source Multimodal Knowledge Memory.",
  "Zhang and Soh. 2024. Extract, Define, Canonicalize: An LLM-based Framework for Knowledge Graph Construction.",
  "Bosselut et al. 2019. COMET: Commonsense Transformers for Automatic Knowledge Graph Construction.",
  "Padhi et al. 2024. Enhancing Cross-Modal Contextual Congruence for Crowdfunding Success using Knowledge-infused Learning.",
];

const presenters = [
  {
    name: "Ugur Kursuncu",
    role: "Assistant Professor, Georgia State University",
    image: ugurImage,
    bio:
      "Leads the SWAN AI Research Group. His research focuses on context-aware and knowledge-infused learning systems across cyber social threats, business, and health informatics.",
  },
  {
    name: "Trilok Padhi",
    role: "Ph.D. Student, Georgia State University",
    image: trilokImage,
    bio:
      "Researches neurosymbolic multimodal learning, knowledge grounding, reasoning, and interpretability of multimodal LLMs and agents. He has previously worked with Siemens, Rakuten, Nvidia, SRI International, and Bosch on AI-driven research and development.",
  },
  {
    name: "Agnik Saha",
    role: "Ph.D. Student, Georgia State University",
    image: agnikImage,
    bio:
      "Researches generative AI through knowledge representation, with applications in health and marketing.",
  },
];

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brand-mark">KIML</span>
          <span>ICWSM 2026 Tutorial</span>
        </a>

        <nav className="nav">
          <a href="#overview">Overview</a>
          <a href="#modules">Modules</a>
          <a href="#schedule">Schedule</a>
          <a href="#hands-on">Hands-on</a>
          <a href="#presenters">Presenters</a>
          <a href="#reading">Reading</a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="hero hero-with-bg"
          style={{
            backgroundImage: `linear-gradient(
              90deg,
              rgba(2, 6, 23, 0.88) 0%,
              rgba(15, 23, 42, 0.76) 48%,
              rgba(15, 23, 42, 0.45) 100%
            ), url(${laBg})`,
          }}
        >
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Tutorial</p>
              <p className="conference-line">
                International AAAI Conference on Web and Social Media · Los Angeles, CA
              </p>
              <h1>Knowledge-Infused Multimodal Learning</h1>
              <p className="hero-subtitle">
                Building reliable, interpretable, and context-aware multimodal
                AI systems by bridging Knowledge Graphs, Large Language Models,
                and Vision-Language Models.
              </p>

              <div className="hero-actions">
                <a href="#overview" className="btn btn-primary">
                  View Tutorial
                </a>
                <a href="#schedule" className="btn btn-secondary">
                  See Schedule
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <div className="card-label">Tutorial Details</div>

              <div className="info-row">
                <span>Venue</span>
                <strong>ICWSM 2026</strong>
              </div>
              <div className="info-row">
                <span>Format</span>
                <strong>Hands-on + Lecture</strong>
              </div>
              <div className="info-row">
                <span>Duration</span>
                <strong>4 Hours</strong>
              </div>
              <div className="info-row">
                <span>Location</span>
                <strong>Los Angeles, CA, USA</strong>
              </div>
              <div className="info-row">
                <span>Prerequisites</span>
                <strong>No prior KG/VLM experience required</strong>
              </div>
            </aside>
          </div>
        </section>

        <section id="overview" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Overview</p>
              <h2>Why knowledge-infused multimodal learning?</h2>
              <p>
                Modern AI systems are increasingly deployed in high-stakes,
                knowledge-intensive domains such as health, social issues,
                business, and human-AI collaboration. While LLMs and VLMs have
                impressive generative capabilities, they remain vulnerable to
                hallucination, weak factual grounding, and limited
                interpretability. This tutorial introduces practical methods for
                combining symbolic knowledge with neural multimodal models.
              </p>
            </div>

            <div className="overview-grid">
              <article className="overview-card">
                <span className="icon">◇</span>
                <h3>Grounded Reasoning</h3>
                <p>
                  Use Knowledge Graphs and ontologies to provide structured,
                  interpretable representations for multimodal AI systems.
                </p>
              </article>

              <article className="overview-card">
                <span className="icon">▣</span>
                <h3>Multimodal Knowledge Infusion</h3>
                <p>
                  Explore KG-based retrieval, prompt-based fusion, and
                  fine-tuning strategies for improving VLM reliability.
                </p>
              </article>

              <article className="overview-card">
                <span className="icon">✦</span>
                <h3>Hands-on Pipelines</h3>
                <p>
                  Build practical pipelines that combine LLMs, VLMs, retrieval
                  systems, and KGs for knowledge-aware multimodal reasoning.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="modules" className="section section-muted">
          <div className="container">
            <div className="section-heading compact">
              <p className="eyebrow">Tutorial Content</p>
              <h2>Three core modules</h2>
            </div>

            <div className="module-list">
              {modules.map((module) => (
                <article className="module-card" key={module.number}>
                  <div className="module-number">{module.number}</div>
                  <div>
                    <h3>{module.title}</h3>
                    <p>{module.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="section">
          <div className="container">
            <div className="section-heading compact">
              <p className="eyebrow">Detailed Schedule</p>
              <h2>Four-hour tutorial plan</h2>
            </div>

            <div className="schedule-table">
              {schedule.map((item) => (
                <div className="schedule-row" key={item.time}>
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-content">
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hands-on" className="section section-accent">
          <div className="container split">
            <div>
              <p className="eyebrow light">Hands-on Session</p>
              <h2>What participants will build</h2>
              <p>
                Participants will work with guided notebooks and curated
                datasets to implement three practical knowledge-infusion
                strategies: KG-based retrieval-augmented generation,
                prompt-based fusion, and fine-tuning with KG-enriched examples.
              </p>
            </div>

            <div className="checklist">
              <div>Structured prompts for symbolic knowledge fusion</div>
              <div>Vision-language question answering with external knowledge</div>
              <div>KG-enriched datasets for biomedical and commonsense examples</div>
              <div>Discussion of evaluation, grounding, and open challenges</div>
            </div>
          </div>
        </section>

        <section id="audience" className="section">
          <div className="container two-column">
            <article className="panel">
              <p className="eyebrow">Target Audience</p>
              <h2>Who should attend?</h2>
              <p>
                This tutorial is designed for researchers and practitioners in
                knowledge representation, reasoning, language understanding,
                multimodal learning, social media analysis, health informatics,
                and human-centered AI.
              </p>
            </article>

            <article className="panel">
              <p className="eyebrow">Preparation</p>
              <h2>What to bring?</h2>
              <p>
                Participants are encouraged to bring a laptop with Python
                installed. Optional GPU access is recommended but not required.
                Installation instructions, datasets, notebooks, and code
                templates will be shared before the event.
              </p>
            </article>
          </div>
        </section>

        <section id="presenters" className="section section-muted">
          <div className="container">
            <div className="section-heading compact">
              <p className="eyebrow">Presenters</p>
              <h2>Tutorial organizers</h2>
            </div>
            <div className="presenter-grid">
              {presenters.map((person) => (
                <article className="presenter-card" key={person.name}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className="presenter-image"
                  />

                  <h3>{person.name}</h3>
                  <p className="role">{person.role}</p>
                  <p>{person.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reading" className="section">
          <div className="container">
            <div className="section-heading compact">
              <p className="eyebrow">Suggested Reading</p>
              <h2>Recommended background</h2>
            </div>

            <ol className="reading-list">
              {readings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Knowledge-Infused Multimodal Learning Tutorial</p>
          <p>SWAN AI Research Group · Georgia State University</p>
        </div>
      </footer>
    </div>
  );
}

export default App;