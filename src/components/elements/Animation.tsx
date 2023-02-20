import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { AnimationOnScrollProps } from "../../types/animation";

interface Props extends AnimationOnScrollProps {}

export const UiAnimation = ({
  children,
  duration = 1,
  animateIn = "animate__zoomIn",
  animateOnce = true,
  offset = 150,
  delay = 0,
}: Props) => {
  return (
    <AnimationOnScroll
      offset={offset}
      animateOnce={animateOnce}
      animateIn={animateIn}
      duration={duration}
      delay={delay}
      style={{
        zIndex: "100",
        position: "relative",
      }}
    >
      {children}
    </AnimationOnScroll>
  );
};
