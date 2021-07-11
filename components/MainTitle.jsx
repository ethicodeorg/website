import theme from '../styles/theme';
import AnimateIn from './AnimateIn';

const MainTitle = ({ title, isDark, isTop }) => {
  return (
    <h2 className="main-title">
      <AnimateIn duration={1}>{title}</AnimateIn>

      <style jsx>{`
        .main-title {
          max-width: 1200px;
          padding-top: ${isTop ? '100px' : '40px'};
          margin: 0 auto;
          font-size: 36px;
          text-align: left;
          line-height: 50px;
          color: ${isDark ? theme.colors.lightText : theme.colors.text};
        }

        @media screen and (min-width: 600px) {
          .main-title {
            padding-top: ${isTop ? '160px' : '40px'};
            font-size: 48px;
            line-height: 100px;
          }
        }

        @media screen and (min-width: 1000px) {
          .main-title {
            font-size: 72px;
            line-height: 120px;
          }
        }

        @media screen and (min-width: 1200px) {
          .main-title {
            font-size: 72px;
            line-height: 120px;
          }
        }
      `}</style>
    </h2>
  );
};

export default MainTitle;
