import Link from "next/link";
import Image from "next/image";

import about_arrow from "@/assets/img/arrow-shape.png";
import about_thumb from "@/assets/img/sai spandana images/harmonium/harmonium_department_indian_classical_music (1).jpeg";

interface ContentType {
  sub_title: string;
  title: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  list: JSX.Element[];
}

const about_content: ContentType = {
  sub_title: "About Sai spandana",
  title: "Sai Spandana Musical Academy | Masterthe Art of Music",
  desc_1: (
    <>
      Welcome to Sai Spandana Musical Academy, where passion transforms into
      melody! Led by Dr. Neelam Patel, a maestro in Hindustani classical music,
      and Prithvi Raj, an expert musician, our academy is a hub for learning and
      experiencing the essence of Indian classical and contemporary music.
    </>
  ),
  desc_2: <></>,
  list: [
    <>
      Comprehensive Courses – Hindustani Vocals, Tabla, Harmonium, Ghazal, Sufi
      & More
    </>,
    <>
      {" "}
      Certified Instructors – Learn from experienced artists & industry
      professionals
    </>,
    <>
      Personalized Learning – Tailored lessons for beginners to advanced
      students
    </>,
    <>Live Performances & Events – Get real-world stage experience</>,
    <>
      Flexible Learning Modes – Join from anywhere with online & offline classes
    </>,
  ],
};

const { sub_title, title, desc_1, desc_2, list } = about_content;

const AboutArea = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div
                className="about-image style-2"
                style={{
                  backgroundColor: "black",
                  position: "relative",
                }}
              >
                <Image
                  src={about_thumb}
                  alt="about-img"
                  style={{ objectFit: "contain" }}
                />
                <span className="title-text" style={{ color: "white" }}>
                  {" "}
                  <h3>
                    <span className="count">
                      {/* <Count number={25} /> */}
                      20+
                    </span>{" "}
                    Years of
                  </h3>
                  <p
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Experience of
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                    }}
                  >
                    training and mentoring <br /> students for academic <br /> &
                    career growth
                  </p>
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp">{sub_title}</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {title}
                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {desc_1}
                </p>
                <p className="mt-2 wow fadeInUp" data-wow-delay=".7s">
                  {desc_2}
                </p>
                <h4 style={{ margin: "12px 0px" }}>
                  Why Choose Kanchan Ma’am?
                </h4>
                <ul
                  className="wow fadeInUp"
                  style={{ gap: "10px" }}
                  data-wow-delay=".8s"
                >
                  {list.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="theme-btn-2 mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  know More About us
                  <span className="shape-img">
                    <Image src={about_arrow} alt="shape-img" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
