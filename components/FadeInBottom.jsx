import ScrollAnimation from 'react-animate-on-scroll';

const FadeInBottom = ({ children, duration, animation = 'fadeInUp', offset = 100 }) => {
  return (
    <ScrollAnimation
      animateIn={animation}
      animatePreScroll={true}
      animateOnce={true}
      duration={duration}
      offset={offset}
    >
      {children}
    </ScrollAnimation>
  );
};

export default FadeInBottom;
