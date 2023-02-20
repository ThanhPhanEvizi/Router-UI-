import { CardMedia, Grid } from "@mui/material";
import { Container, SxProps } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "animate.css";
import {
  Col,
  Text,
  AnimateBounceInUp,
  AnimationZoomIn,
} from "../../../components/elements";
import tech from "../../../assets/landing/tech.svg";
import dashboard from "../../../assets/landing/dashboard.png";
import layoutDashboard from "../../../assets/landing/layout_dashboard.png";
import profile from "../../../assets/landing/profile.png";
import widget from "../../../assets/landing/hero-widget.png";
import UiButton from "../../../components/elements/UiButton";

const animation: SxProps = {
  width: "50%",
  animation: "profile 3s ease-in-out 0s infinite normal none running",
  "@keyframes profile": {
    "0%,100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-10px)" },
  },
};

const Intro = () => {
  return (
    <Col
      sx={{
        height: "100vh",
        backgroundColor: "#030614",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Container sx={{ height: "100%", position: "relative" }}>
        <Grid container sx={{ alignItems: "center", height: "100%" }}>
          <Grid item xs={5}>
            <Col
              sx={{
                justifyContent: "center",
                height: "100%",
              }}
            >
              <AnimateBounceInUp>
                <Text
                  sx={{
                    fontSize: "3.5em",
                    fontWeight: "bold",
                    lineHeight: "1.2",
                  }}
                >
                  Use Berry to
                  <br /> Power Your Next
                  <br /> React Project
                </Text>
              </AnimateBounceInUp>
              <AnimateBounceInUp animationDelay="0.4s">
                <Text sx={{ fontSize: "1.1em" }}>
                  Berry is React based Dashboard template which helps you
                  <br /> to build faster and beautiful web applications.
                </Text>
              </AnimateBounceInUp>
              <AnimateBounceInUp
                animationDelay="0.8s"
                sx={{ margin: "30px 0px" }}
              >
                <UiButton icon={<PlayArrowIcon />}>Live Preview</UiButton>
              </AnimateBounceInUp>
              <AnimateBounceInUp animationDelay="1.2s">
                <CardMedia component="img" image={tech} sx={{ width: "80%" }} />
              </AnimateBounceInUp>
            </Col>
          </Grid>
          <Grid item xs={7} sx={{ height: "100%" }}>
            <Col
              sx={{
                justifyContent: "center",
                height: "100%",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                image={dashboard}
                sx={{
                  transform: "scale(1.5)",
                  transformOrigin: "0px 50%",
                  zIndex: "2",
                }}
              />
              <CardMedia
                component="img"
                image={layoutDashboard}
                sx={{
                  position: "absolute",
                  transform: "scale(1.5)",
                  transformOrigin: "0px 50%",
                }}
              />
              <AnimationZoomIn
                sx={{
                  position: "absolute",
                  right: "-380px",
                  top: "-440px",
                }}
              >
                <CardMedia
                  component="img"
                  image={profile}
                  sx={{ ...animation }}
                />
              </AnimationZoomIn>
              <AnimationZoomIn
                sx={{
                  position: "absolute",
                  left: "300px",
                  top: "-100px",
                }}
              >
                <CardMedia
                  component="img"
                  image={widget}
                  sx={{ ...animation }}
                />
              </AnimationZoomIn>
            </Col>
          </Grid>
        </Grid>
      </Container>
    </Col>
  );
};

export default Intro;
