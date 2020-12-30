import theme from '../styles/theme';
import FadeInBottom from './FadeInBottom';

const MainTitle = ({ title, isDark }) => {
  return (
    <h2 className="main-title">
      <FadeInBottom duration={1}>{title}</FadeInBottom>

      <style jsx>{`
        .main-title {
          max-width: 1200px;
          padding-top: 100px;
          margin: 0 auto;
          font-size: 36px;
          text-align: left;
          line-height: 50px;
          color: ${isDark ? theme.colors.lightText : theme.colors.text};
        }

        @media screen and (min-width: 600px) {
          .main-title {
            padding-top: 160px;
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
            font-size: 104px;
            line-height: 120px;
          }
        }
      `}</style>
    </h2>
  );
};

export default MainTitle;
