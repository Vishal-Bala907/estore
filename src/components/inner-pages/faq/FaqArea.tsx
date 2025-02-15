import faq_img from "@/assets/img/sai spandana images/about us/about_us_section_of_website_indian_classical (1).jpeg";
import Faq from "@/components/common/Faq";
import Image from "next/image";

const FaqArea = () => {
  return (
    <section className="faq-section fix section-padding">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="faq-image">
              <Image src={faq_img} alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <Faq style={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
