import { Col, Row } from "../../../components/elements";
import Benefit from "../components/Benefit";
import DeveloperExperience from "../components/DeveloperExperience";
import ExploreApps from "../components/ExploreApps";
import Footer from "../components/Footer";
import Frameworks from "../components/Frameworks";
import Intro from "../components/Intro";
import Offer from "../components/Offer";
import Testaments from "../components/Testaments";

const LandingPage = () => {
  return (
    <Col
      sx={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Col>
        <Intro />
        <Row sx={{ backgroundColor: "#12172f", height: "30vh" }} />
        <DeveloperExperience />
        <Offer />
        <ExploreApps />
        <Testaments />
        <Benefit />
        <Frameworks />
        <Footer />
      </Col>
    </Col>
  );
};

export default LandingPage;
