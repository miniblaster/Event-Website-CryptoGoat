import React, { useState } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";
import PortfolioTwo from "./PortfolioTwo";
import ContactInfo from "../../data/contact.json";
import EducationInfo from "../../data/education.json";
import HeaderOne from "../../common/header/HeaderOne";
import FooterFour from "../../common/footer/FooterFour";
import ContactOne from "../contact/ContactOne";
import AboutSix from "../about/AboutSix";
import Marquee from "react-fast-marquee";
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "react-bootstrap";

import { Link } from "react-router-dom";

const PortfolioThreeColumn = () => {
  const [isLight, setIsLight] = useState(false);
  const switchTheme = () => {
    document.querySelector("body").classList.toggle("light");
    setIsLight(document.querySelector("body").classList.contains("light"));
  };

  return (
    <>
      <SEO title="CryptoGOAT in Abu Dhabi" />

      <main className="page-wrapper">
        {/* <HeaderTopNews /> */}
        <HeaderOne
          btnStyle="btn-small round btn-icon"
          HeaderSTyle="header-transparent"
          switchTheme={switchTheme}
        />

        {/* <Carousel fade>
          <Carousel.Item> */}
        <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay={isLight ? "5" : "8"}
          style={{
            backgroundImage: `url(https://cryptoexpodubai.com/wp-content/uploads/2022/12/Banner-Images-new4.jpg)`,
          }}
          id="home"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                  >
                    <div>
                      <h1 className="rn-sub-badge bg-transparent">
                        <Marquee
                          speed={150}
                          delay={1}
                          pauseOnClick={true}
                          gradient={false}
                        >
                          <h2 className="theme-gradient mb-0">
                            {" "}
                            June 1, 2023 at 6:30 pm - Dubai, ATLANTIS, THE PALM{" "}
                          </h2>
                        </Marquee>
                      </h1>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    delay={400}
                    animateOnce={true}
                  >
                    <h3 className="title display-one">
                      CryptoGOAT Conference <br />
                    </h3>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Carousel.Item>
        </Carousel> */}

        <div className="main-content">
          <div className="rwt-portfolio-area rn-section-gap">
            <div className="container">
              <div className="row" id="about">
                <ScrollAnimation
                  className="col-lg-6"
                  animateIn="fadeInLeft"
                  animateOut="fadeInRight"
                  animateOnce={true}
                >
                  <div className="content">
                    <h3 className="title text-center">
                      What is <br /> CryptoGOAT Conference?
                    </h3>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation
                  className="col-lg-6"
                  animateIn="fadeInRight"
                  animateOut="fadeInLeft"
                  delay={300}
                  animateOnce={true}
                >
                  <p className="mb--10">
                    CryptoGOAT is the blockchain conference network bringing
                    together the key players of crypto industry and experts to
                    redefine the future of finance. The edition of the
                    CryptoGOAT will take place during on June 1, 2023 in Dubai,
                    with the world’s top crypto companies and blockchain
                    entrepreneurs. Today, UAE, specifically Dubai is gearing up
                    to become a global crypto hub. Thus, CryptoGOAT will be the
                    gathering in the region on behalf of the world of blockchain
                    and cryptocurrency, with a wide range of topics focused on
                    the financial technologies of the future, extensive
                    networking opportunities and participation from more than 40
                    countries.
                  </p>
                </ScrollAnimation>
              </div>

              <AboutSix />

              <div className="row" style={{marginBottom: '120px'}} id="speakers">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="2023&nbsp;&nbsp;Speakers"
                    description=""
                  />
                </div>
                <PortfolioOne Column="col-lg-3 col-md-6 mt--30 portfolio" />
              </div>

              <div className="row" id="sponsors">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Our&nbsp;&nbsp;Sponsors"
                    description=""
                  />
                </div>
                <PortfolioTwo Column="col-lg-3 col-md-6 mt--30 portfolio" />
              </div>
            </div>
          </div>
        </div>

        <FooterFour />
      </main>
    </>
  );
};
export default PortfolioThreeColumn;
