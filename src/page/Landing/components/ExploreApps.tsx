import { useCallback, useRef, useState } from "react";
import { Box, CardMedia, SxProps } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Text } from "../../../components/elements";
import { EXPLORE_APPS } from "../../../constants";

const settings = {
  className: "center",
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerPadding: "60px",
  centerMode: true,
  initialSlide: 0,
  arrows: false,
};

const arrowButtonStyle: SxProps = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "90px",
  height: "90px",
};

const ExploreApps = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slider = useRef<Slider>(null);
  const next = () => {
    slider?.current?.slickNext();
  };
  const previous = () => {
    slider?.current?.slickPrev();
  };

  const handleAfterChange = useCallback((slide: number) => {
    setCurrentSlide(slide);
  }, []);

  return (
    <Col
      sx={{
        minHeight: "100vh",
        backgroundColor: "#030614",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Col sx={{ padding: "50px 0px" }}>
        <Col sx={{ alignItems: "center", justifyContent: "center" }}>
          <Text sx={{ fontSize: "2.15em", fontWeight: "bold" }}>
            Explore Concenputal Apps
          </Text>
          <Text>
            Berry has conceptul working apps like Chat, Inbox, E-commerce,
            Invoice, Kanban, and Calendar
          </Text>
        </Col>
        <Box sx={{ position: "relative", marginTop: "40px" }}>
          <Slider ref={slider} afterChange={handleAfterChange} {...settings}>
            {EXPLORE_APPS.map((explore, index) => {
              return (
                <div key={index}>
                  <Col
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "500px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={explore.image}
                      loading="lazy"
                      sx={{
                        height: currentSlide === index ? "500px" : "100%",
                        width: currentSlide === index ? "900px" : "100%",
                        zIndex: currentSlide === index ? 1 : -1,
                        opacity: currentSlide === index ? 1 : 0.5,
                        animation: "2s",
                      }}
                    />
                    {currentSlide === index && (
                      <Text
                        sx={{
                          marginTop: "20px",
                          fontSize: "1.25em",
                          fontWeight: "bold",
                        }}
                      >
                        {explore.title}
                      </Text>
                    )}
                  </Col>
                </div>
              );
            })}
          </Slider>
          <ArrowCircleLeftIcon
            onClick={previous}
            sx={{
              left: "15%",
              ...arrowButtonStyle,
            }}
          />
          <ArrowCircleRightIcon
            onClick={next}
            sx={{
              right: "15%",
              ...arrowButtonStyle,
            }}
          />
        </Box>
      </Col>
    </Col>
  );
};

export default ExploreApps;
