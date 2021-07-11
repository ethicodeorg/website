import theme from '../styles/theme';

const InnovationHeadline = () => (
  <span>
    A<span className="accent pink"> safe </span>
    space for new ideas to be born and fostered,
    <div>
      that serve our
      <span className="accent yellow"> mission</span> – to educate, raise awareness,
    </div>
    <div>
      {' '}
      and promote <span className="accent blue"> fairness </span> towards all animal species,
    </div>
    <div>
      so that we can eliminate<span className="accent pink"> needless </span>suffering,
    </div>
    <div>
      reduce <span className="accent yellow"> environmental </span>footprints, and elevate
    </div>
    <div>
      <span className="accent blue"> wellbeing</span>.
    </div>
    <style jsx scoped>{`
      .accent {
        font-size: 18px;
      }
      .pink {
        color: ${theme.colors.pink};
      }
      .yellow {
        color: ${theme.colors.green};
      }
      .blue {
        color: ${theme.colors.blue};
      }

      @media screen and (min-width: 600px) {
        .yellow {
          color: ${theme.colors.yellow};
        }
      }

      @media screen and (min-width: 800px) {
        .accent {
          font-size: 24px;
        }
      }

      @media screen and (min-width: 1200px) {
        .accent {
          font-size: 32px;
        }
      }
    `}</style>{' '}
  </span>
);

export default InnovationHeadline;
