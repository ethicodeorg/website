import theme from '../styles/theme';

const StudioHeadline = () => (
  <span>
    <span className="accent pink">Custom </span>
    web & mobile applications
    <div>
      to scale your impact and propel your
      <span className="accent yellow"> mission</span>
    </div>
    towards a more <span className="accent blue"> ethical </span> future.
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
    `}</style>
  </span>
);

export default StudioHeadline;
