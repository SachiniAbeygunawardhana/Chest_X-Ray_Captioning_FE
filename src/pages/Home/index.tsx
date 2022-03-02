import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import FunctionBlockContent from "../../content/FunctionBlockContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FunctionBlock = lazy(() => import("../../components/FunctionBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
{/* Landing Section*/}
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="5.jpg"
        id="intro"
      />
{/* Explore section (where caption generation happens)*/}

      <FunctionBlock
          title={FunctionBlockContent.title}
          content={FunctionBlockContent.text}
          image ="upload.png"
          button = {FunctionBlockContent.button}
          uploadButton = {FunctionBlockContent.uploadButton}
          id="main"
        />


{/* LearnMore section (More information) */}
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="4.png"
        id="about"
      />
{/* Contact section (contact form) */}
      <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
      />


{/*       <ContentBlock */}
{/*         type="right" */}
{/*         title={MissionContent.title} */}
{/*         content={MissionContent.text} */}
{/*         icon="product-launch.svg" */}
{/*         id="mission" */}
{/*       /> */}
{/*       <ContentBlock */}
{/*         type="left" */}
{/*         title={ProductContent.title} */}
{/*         content={ProductContent.text} */}
{/*         icon="waving.svg" */}
{/*         id="product" */}
{/*       /> */}

    </Container>
  );
};

export default Home;
