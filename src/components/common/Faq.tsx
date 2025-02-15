"use client";
import { useState } from "react";
import faq_img from "@/assets/img/faq.jpg";
import Image from "next/image";

interface DataType {
  id: number;
  title: string;
  desc: JSX.Element;
  space?: string;
  data_wow_delay: string;
}
[];

const faq_data: DataType[] = [
  {
    id: 1,
    data_wow_delay: ".3s",
    space: "mb-3",
    title: "Who can join Sai Spandana Musical Academy?",
    desc: (
      <>
        <ol type="1">
          <li>
            Anyone with a passion for music! We welcome students of all ages and
            skill levels, from beginners to advanced musicians.
          </li>
        </ol>
        {/* Yes, we specialize in designing and manufacturing custom bottles, caps,
        closures, and measuring cups tailored to your specific needs. */}
      </>
    ),
  },
  {
    id: 2,
    data_wow_delay: ".5s",
    space: "mb-3",
    title: "Are the courses available online as well?",
    desc: (
      <>
        <ul>
          <li>
            Yes! We offer both online and offline music courses, allowing
            students to learn from anywhere in the world at their convenience.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    data_wow_delay: ".7s",
    space: "mb-3",
    title: " Do I need any prior musical experience to enroll?",
    desc: (
      <>
        <div>
          Not at all! Our courses are designed for all levels. Whether
          you&apos;re a complete beginner or an experienced musician, we have
          structured learning paths to help you grow.
        </div>
      </>
    ),
  },
  {
    id: 4,
    data_wow_delay: ".9s",
    title: "Will I receive a certificate after completing a course?",
    desc: (
      <>
        Yes! All students receive an industry-recognized certification upon
        successful completion of their course.
      </>
    ),
  },
  {
    id: 5,
    data_wow_delay: ".9s",
    title: "Can I get personalized one-on-one training?",
    desc: (
      <>
        <ul>
          <li>
            {" "}
            Absolutely! We offer personalized mentorship and one-on-one training
            to ensure a tailored learning experience based on your needs and
            goals
          </li>
        </ul>
      </>
    ),
  },
];

const Faq = ({ style }: any) => {
  const [activeId, setActiveId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    setActiveId((prevActiveId) => (prevActiveId === id ? -1 : id));
  };

  return (
    <>
      {faq_data.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${style ? "mb-3" : ""} ${
            item.space
          } wow fadeInUp`}
          data-wow-delay={item.data_wow_delay}
        >
          <h5 className="accordion-header">
            <button
              onClick={() => toggleAccordion(item.id)}
              className={`accordion-button ${
                activeId !== item.id ? "collapsed" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq${item.id}`}
              aria-expanded="false"
              aria-controls={`${item.id}`}
            >
              {item.title}
            </button>
          </h5>
          <div
            id={`${item.id}`}
            className={`accordion-collapse collapse ${
              activeId === item.id ? "show" : ""
            }`}
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">{item.desc}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
