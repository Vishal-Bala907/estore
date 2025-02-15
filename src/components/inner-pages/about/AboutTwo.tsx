import Image from "next/image";
import Link from "next/link";

import about_img1 from "@/assets/img/arrow-shape.png";
import about_img2 from "@/assets/img/sai spandana images/tabla/tabla_department_indian_classical_music.jpeg";

const AboutTwo = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-2 style-2">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">
                    About Us | A Legacy of Musical Excellence
                  </h3>
                  {/* <h3>Our Missoin</h3> */}
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                    Sai Spandana Musical Academy is more than just a music
                    school—it’s a cultural movement dedicated to preserving and
                    evolving the rich traditions of Indian classical music.
                    Founded by Dr. Neelam Patel & Prithvi Raj, the academy is
                    known for its structured training in vocals, tabla,
                    harmonium, ghazal, and live performance
                  </p>
                </div>
                <h3>Why We Stand Out:</h3>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  💡{" "}
                  <ul>
                    <li>
                      {" "}
                      Expert-Led Training – Courses crafted by maestros &
                      industry expert
                    </li>
                    <li>
                      Structured Learning Path – From beginner to professional
                      levels{" "}
                    </li>
                    <li>
                      Collaborative Environment – Engage with renowned musicians
                      & mentors
                    </li>
                    <li>
                      Fusion of Tradition & Modernity – Classical techniques
                      with contemporary insights
                    </li>
                    <li>
                      Performance & Recognition – Participate in concerts,
                      competitions & digital showcases
                    </li>
                  </ul>
                </p>
                {/* <ul className="wow fadeInUp" data-wow-delay=".7s">
                  <li>
                    We have a combination of skilled and experienced workforce
                    to look after the production of high end products.
                  </li>
                  <li>We untiringly strive for zero defects</li>
                  <li>
                    All our employees share responsibility to continuously
                    improve our products
                  </li>
                </ul> */}

                <h3
                  style={{ margin: "50px 0px 20px 0px ! important" }}
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Why Choose Sai Spandana? | The Ultimate Music Learning
                  Destination
                </h3>
                <div
                  className="wow fadeInUp"
                  data-wow-delay=".7s"
                  style={{ margin: "16px 0px" }}
                >
                  <ul>
                    <li>
                      Learn from the Best – Highly qualified instructors with
                      real-world experience
                    </li>
                    <li>
                      Live Performance Training – Hands-on exposure to concerts
                      & stage performances.
                    </li>
                    <li>
                      Interactive Learning – Online & offline classes with
                      one-on-one mentorship
                    </li>
                    <li>
                      Certification & Career Boost – Industry-recognized courses
                      to enhance your credentials.
                    </li>
                    <li>
                      All Skill Levels Welcome – From absolute beginners to
                      aspiring professionals
                    </li>
                    <li>
                      Modern Digital Learning – AI-integrated learning
                      techniques for a tech-driven experience.
                    </li>
                    <li>
                      Customized Course Plans – Flexible learning that fits your
                      schedule.
                    </li>
                  </ul>
                </div>
                <Link
                  href="/about"
                  className="theme-btn-2 mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  know More About us
                  <span className="shape-img">
                    <Image src={about_img1} alt="shape-img" />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image">
                <Image src={about_img2} alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
            margin: "180px  10px 0px 10px",
          }}
        >
          <div className="about-image" style={{ maxWidth: "40%" }}>
            <Image
              src={about_img2}
              alt="about-img"
              style={{ width: "60%", height: "auto" }}
            />
          </div>
          <div style={{ maxWidth: "40%" }}>
            <h2 style={{ margin: "30px 0px", textAlign: "center" }}>
              Our Courses | Learn, Practice & Perform
            </h2>
            <b
              className="mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".5s"
              style={{ margin: "0px 30px", display: "block" }}
            >
              We offer a diverse range of music courses, curated to suit
              different skill levels and interests.
            </b>
            <ol
              className=""
              data-wow-delay=".7s"
              style={{ alignSelf: "start", margin: "0px 15px" }}
            >
              <li>Vocals Department</li>
              <li>Tabla Department</li>
              <li>Harmonium Department</li>
              <li>Live Music & Performance Training</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
