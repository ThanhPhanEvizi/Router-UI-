export interface AnimationOnScrollProps {
  offset?: number;
  duration?: number;
  style?: any;
  className?: string;
  initiallyVisible?: boolean;
  animateIn?: string;
  afterAnimatedIn?: any;
  animateOut?: string;
  delay?: number;
  animatePreScroll?: boolean;
  afterAnimatedOut?: any;
  scrollableParentSelector?: string;
  animateOnce?: boolean;
  children?: React.ReactNode;
}
