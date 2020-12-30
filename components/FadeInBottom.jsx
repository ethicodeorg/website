import ScrollAnimation from 'react-animate-on-scroll';

const FadeInBottom = ({ children, duration, animation = 'fadeInUp' }) => {
  return (
    <ScrollAnimation
      animateIn={animation}
      animatePreScroll={true}
      animateOnce={true}
      duration={duration}
    >
      {children}
    </ScrollAnimation>
  );
};

export default FadeInBottom;
