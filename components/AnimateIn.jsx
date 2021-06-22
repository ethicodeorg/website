import ScrollAnimation from 'react-animate-on-scroll';

const AnimateIn = ({ children, duration, animation = 'fadeInUp', offset = 100, delay = 0 }) => {
  return (
    <ScrollAnimation
      animateIn={animation}
      animatePreScroll={true}
      duration={duration}
      offset={offset}
      delay={delay}
    >
      {children}
    </ScrollAnimation>
  );
};

export default AnimateIn;
