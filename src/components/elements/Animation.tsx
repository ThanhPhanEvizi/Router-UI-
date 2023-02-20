import { BoxProps } from "@mui/system";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { Row } from ".";

interface UiBoxProps extends BoxProps {
  animationDelay?: string;
  animationDuration?: string;
  children: React.ReactNode;
}

export const AnimationZoomIn = ({
  children,
  sx,
  animationDelay = "0s",
  animationDuration = "1s",
}: UiBoxProps) => {
  return (
    <AnimationOnScroll
      animateOnce
      animateIn="animate__zoomIn"
      style={{
        zIndex: "100",
        position: "relative",
        animationDelay: animationDelay,
        animationDuration: animationDuration,
      }}
    >
      <Row
        sx={{
          ...sx,
        }}
      >
        {children}
      </Row>
    </AnimationOnScroll>
  );
};

export const AnimateBounceInUp = ({
  children,
  sx,
  animationDelay = "0s",
  animationDuration = "1s",
}: UiBoxProps) => {
  return (
    <AnimationOnScroll
      animateOnce
      animateIn="animate__animated animate__bounceInUp"
      style={{
        position: "relative",
        animationDuration: animationDuration,
        animationDelay: animationDelay,
      }}
    >
      <Row
        sx={{
          ...sx,
        }}
      >
        {children}
      </Row>
    </AnimationOnScroll>
  );
};
