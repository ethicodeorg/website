import theme from '../styles/theme';
import FadeInBottom from './FadeInBottom';
import MainTitle from './MainTitle';

const Ethicode = () => {
  return (
    <div className="vision">
      <MainTitle title="Our vision" isDark isTop />
      <FadeInBottom duration={1}>
        <h2 className="visionContent pink">For a world</h2>
      </FadeInBottom>
      <FadeInBottom duration={1}>
        <h3 className="visionContent">
          where all
          <span className="yellow"> sentient beings</span>
        </h3>
      </FadeInBottom>
      <FadeInBottom duration={1.5}>
        <h4>
          have the right to
          <span className="blue"> life</span>, <span className="blue">liberty</span>, and the
          <span className="blue"> pursuit of happiness</span>.
        </h4>
      </FadeInBottom>

      <style jsx scoped>{`
        .vision {
          padding: 0 20px 100px;
        }
        .visionContent {
          font-style: italic;
          font-weight: bold;
          text-align: left;
        }
        h2 {
          padding-top: 100px;
        }
        h2,
        h3 {
          max-width: 1200px;
          margin: 0 auto;
          font-size: 48px;
          text-align: left;
          line-height: 48px;
          color: ${theme.colors.lightText};
          font-style: italic;
        }
        h3 {
          font-size: 32px;
          line-height: 32px;
        }
        h4 {
          max-width: 1200px;
          padding-top: 5px;
          margin: 0 auto;
          color: ${theme.colors.lightText};
          font-size: 18px;
          text-align: left;
          font-style: italic;
          line-height: 24px;
        }
        .pink {
          color: ${theme.colors.pink};
        }
        .yellow {
          color: ${theme.colors.yellow};
        }
        .blue {
          color: ${theme.colors.blue};
        }
        .white {
          color: ${theme.colors.lightText};
        }

        @media screen and (min-width: 450px) {
          h2 {
            font-size: 72px;
            line-height: 60px;
          }
          h3 {
            font-size: 48px;
            line-height: 48px;
          }
          h4 {
            font-size: 24px;
            line-height: 28px;
          }
        }

        @media screen and (min-width: 800px) {
          .vision {
            padding: 0 45px 200px;
          }
          h2 {
            font-size: 112px;
            line-height: 104px;
          }
          h3 {
            font-size: 56px;
            line-height: 56px;
          }
          h4 {
            font-size: 30px;
            line-height: 34px;
          }
        }

        @media screen and (min-width: 1200px) {
          h2 {
            font-size: 130px;
            line-height: 120px;
          }
          h3 {
            font-size: 80px;
            line-height: 80px;
          }
          h4 {
            font-size: 40px;
            line-height: 44px;
            padding-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Ethicode;
