import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Text } from "../../../components/elements";
import { FRAMEWORKS } from "../../../constants";
import { CardMedia } from "@mui/material";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  arrows: false,
};

const Frameworks = () => {
  return (
    <Col
      sx={{
        backgroundColor: "#12172f",
        color: "white",
        padding: "50px 0px ",
      }}
    >
      <Col sx={{ alignItems: "center", marginBottom: "20px" }}>
        <Text sx={{ fontSize: "2.2em", fontWeight: "bold" }}>
          Berry is now available in multiple frameworks*
        </Text>
        <Text>Each framework is sold separately on different platforms.</Text>
      </Col>
      <Slider {...settings}>
        {FRAMEWORKS.map((framework, index) => {
          return (
            <div key={index}>
              <Col sx={{ alignItems: "center", cursor: "pointer" }}>
                <Col
                  sx={{
                    height: "140px",
                    width: "180px",
                    backgroundColor: "rgb(10, 15, 35)",
                    borderRadius: "12px",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "#606d88",
                    },
                  }}
                >
                  <Row>
                    <CardMedia component="img" src={framework.image} />
                  </Row>
                  <Text sx={{ marginTop: "20px" }}>{framework.label}</Text>
                </Col>
              </Col>
            </div>
          );
        })}
      </Slider>
    </Col>
  );
};

export default Frameworks;
