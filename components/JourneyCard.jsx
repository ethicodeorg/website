import Link from 'next/link';
import theme from '../styles/theme';

const JourneyCard = ({ topIcon, title, text, link }) => {
  return (
    <div className="journey-card">
      <div className="icon-container">{topIcon}</div>
      <h3>{title}</h3>
      <p>
        {text}
        {link && (
          <Link href={link.href}>
            <a className="link">{link.text}</a>
          </Link>
        )}
      </p>

      <style jsx scoped>{`
        .journey-card {
          width: calc(100% - 40px);
          margin-bottom: 20px;
          padding: 20px;
          background-color: ${theme.colors.white};
          text-align: center;
          line-height: 1.4;
        }
        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
        }
        .link {
          text-decoration: none;
          color: ${theme.colors.blue};
        }
        svg {
          width: 50px;
        }

        @media screen and (min-width: 800px) {
          .journey-card {
            width: 160px;
            height: 300px;
            margin-bottom: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default JourneyCard;
