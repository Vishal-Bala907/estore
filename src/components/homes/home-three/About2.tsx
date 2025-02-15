import Image from "next/image";
import Count from "@/components/common/Count";
import Link from "next/link";

import about_thumb from "@/assets/img/about/about-3.jpg";
import image from "@/assets/img/sai spandana images/classical/Indo Western Music.jpeg";
import about_arrow from "@/assets/img/arrow-shape.png";

interface ContentType {
  sub_title: string;
  title: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  list: string[];
}

const about_content: ContentType = {
  sub_title: "ABOUT",
  title: "What is Sai spandana?",
  desc_1: (
    <>
      Sai Spandana is a
      <span style={{ color: "#ffe000" }}> Musical Academy </span> and
      <span style={{ color: "#ffe000" }}>
        {" "}
        is more than just a music school
      </span>{" "}
      —it’s a cultural movement dedicated to preserving and evolving the rich
      traditions of Indian classical music Founded by
      <span style={{ color: "#ffe000" }}>
        {" "}
        y Dr. Neelam Patel & Prithvi Raj
      </span>
      , the academy is known for its structured training in vocals, tabla,
      harmonium, ghazal, and live performance.
    </>
  ),
  desc_2: (
    <>
      Why We Stand Out:{" "}
      {/* <span style={{ color: "#ffe000" }}>
        psychology, neuroscience, and practical techniques
      </span>{" "}
      to help you create lasting change. Whether it&apos;s career growth,
      business success, or personal fulfillment—Kanchan&apos;s guidance can make
      all the difference. */}
    </>
  ),
  list: [
    "Expert-Led Training – Courses crafted by maestros & industry experts",
    "Structured Learning Path – From beginner to professional levels",
    "Collaborative Environment – Engage with renowned musicians & mentors",
    "Fusion of Tradition & Modernity – Classical techniques with contemporary insights",
    "Performance & Recognition – Participate in concerts, competitions & digital showcases",
  ],
};

const { sub_title, title, desc_1, desc_2, list } = about_content;

const About2 = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-3">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image">
                <Image
                  src={image}
                  alt="about-img"
                  style={{
                    borderRadius: "10px",
                    border: "4px solid white",
                  }}
                />
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
                <br />
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {desc_2}
                </p>
                <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                  {list.map((list, i) => (
                    <li key={i} style={{ color: "#ffe000s" }}>
                      <i
                        className="fa-regular fa-circle-check"
                        style={{ color: "#14b2f1" }}
                      ></i>
                      {list}
                    </li>
                  ))}
                </ul>
                <div
                  className="about-info"
                  style={{
                    flexDirection: "row-reverse",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    className="info-left wow fadeInUp"
                    style={{ alignSelf: "end" }}
                    data-wow-delay=".8s"
                  >
                    {/* <div className="content">
                      <h2>
                        <span className="count">
                          <Count number={30} />{" "}
                        </span>
                        +
                      </h2>
                      <p>{desc_2}</p>
                    </div> */}
                    <Link href="/about" className="theme-btn-2">
                      know More About us
                      <span className="shape-img">
                        <Image src={about_arrow} alt="shape-img" />
                      </span>
                    </Link>
                  </div>
                  <div
                    className="info-right wow fadeInUp"
                    data-wow-delay=".9s"
                    // style={{ backgroundColor: "#ffe000" }}
                  >
                    <div className="icon ripple" style={{ color: "#ffe000" }}>
                      <i
                        className="fa-solid fa-phone-volume"
                        style={{ color: "#ffe000" }}
                      ></i>
                    </div>
                    <h4>
                      <Link href="tel:+91-90962 07767">90962 07767</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
