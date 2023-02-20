import { useCallback, useEffect, useRef, useState } from "react";
import { CardMedia, Container, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Text } from "../../../components/elements";
import { BENEFITS } from "../../../constants";
import hand from "../../../assets/landing/hand.png";

const settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  arrows: false,
};

const StyledSlider = styled(Slider)({
  "&.slick-slider": {
    width: "600px",
  },
});

const Benefit = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    if (sliderRef?.current) {
      sliderRef.current!.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

  const handleAfterChange = useCallback((slide: number) => {
    setCurrentSlide(slide);
  }, []);

  return (
    <Col
      sx={{
        minHeight: "60vh",
        backgroundColor: "#030614",
        color: "white",
        position: "relative",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Container sx={{ padding: "50px 0px", width: "100%" }}>
        <Row sx={{ alignItems: "center" }}>
          <Text
            sx={{
              fontSize: "2.7em",
              fontWeight: "bold",
              paddingRight: "10px",
              marginBottom: "6px",
            }}
          >
            Choose Berry for
          </Text>
          <StyledSlider
            {...settings}
            ref={sliderRef}
            afterChange={handleAfterChange}
          >
            {BENEFITS.map((benefit, index) => {
              const isCurrentSlider = currentSlide === index;

              return (
                <div
                  key={benefit}
                  onClick={() => handleAfterChange(index)}
                  style={{ width: "30px" }}
                >
                  <Text
                    sx={{
                      fontSize: "2.5em",
                      cursor: "pointer",
                      opacity: isCurrentSlider ? "1" : "0.5",
                      fontWeight: "bold",
                      color: isCurrentSlider ? "#2196f3" : "rgb(238, 242, 246)",
                    }}
                  >
                    {benefit}
                  </Text>
                </div>
              );
            })}
          </StyledSlider>
        </Row>
      </Container>
      <CardMedia
        component="img"
        src={hand}
        sx={{
          position: "absolute",
          bottom: "0px",
          right: "30px",
          width: "170px",
        }}
      />
    </Col>
  );
};

export default Benefit;
