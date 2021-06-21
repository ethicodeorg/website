import Link from 'next/link';
import theme from '../styles/theme';
import FadeInBottom from './FadeInBottom';

const FrontPage = () => {
  return (
    <div className="frontpage">
      <div className="divider">
        <div className="studio">
          <div className="content">
            <FadeInBottom animation="rotateIn" duration={4}>
              <div className="icon-container">
                <img className="logo" src="/eye.svg" />
              </div>
            </FadeInBottom>
            <FadeInBottom>
              <h3>Software Studio</h3>
              <div className="text-container">
                <p>Custom web & mobile applications</p>
                <p>to scale your impact and propel your mission</p>
                <p>towards a more ethical future.</p>
              </div>
            </FadeInBottom>
            <div className="sparkle">
              <FadeInBottom animation="rotateIn" delay={200}>
                <Link href="/studio">
                  <a className="button">Learn more</a>
                </Link>
              </FadeInBottom>
            </div>
          </div>
        </div>
        <div className="innovate">
          <div className="content">
            <FadeInBottom animation="rotateIn" delay={500} duration={4}>
              <div className="icon-container">
                <img className="logo" src="/eye.svg" />
              </div>
            </FadeInBottom>
            <FadeInBottom delay={200}>
              <h3>Innovation Center</h3>
              <div className="text-container">
                <p>A safe space for new ideas to be born and fostered</p>
                <p>that serve our mission – to educate, raise awareness,</p>
                <p>and promote fairness towards all animal species.</p>
              </div>
            </FadeInBottom>
            <div className="sparkle sparkle-innovate">
              <FadeInBottom animation="rotateIn" delay={400}>
                <Link href="/innovate">
                  <a className="button">Learn more</a>
                </Link>
              </FadeInBottom>
            </div>
          </div>
        </div>
      </div>
      <style jsx scoped>{`
        .frontpage {
        }
        .divider {
          display: flex;
          flex-direction: column;
          padding: 65px 0 0;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: space-around;
          height: 90vw;
          width: 90vw;
          margin: 5vw auto;
          border-radius: 50%;
          background-color: ${theme.colors.darkBackground};
          color: ${theme.colors.white};
        }
        .studio {
          display: flex;
          background-color: ${theme.colors.yellow};
          width: 100%;
        }
        .innovate {
          display: flex;
          background-color: ${theme.colors.blue};
          width: 100%;
        }
        .icon-container {
          display: flex;
          justify-content: center;
          font-size: 48px;
          color: ${theme.colors.pink};
        }
        .logo {
          width: 30px;
          height: 30px;
        }
        .sparkle {
          position: absolute;
          top: calc(65px + 7vw);
          left: calc(100% - 32vw);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 25vw;
          width: 25vw;
          border-radius: 50%;
          background-color: ${theme.colors.white};
        }
        .sparkle-innovate {
          top: calc(65px + 107vw);
          left: calc(100% - 32vw);
        }
        .button {
          text-decoration: none;
          font-weight: bold;
          color: ${theme.colors.pink};
          font-size: 14px;
        }
        h3 {
          font-size: 24px;
          text-align: center;
          margin: 20px 0;
        }
        .text-container {
          padding-bottom: 50px;
        }
        p {
          font-size: 13px;
          font-style: italic;
          text-align: center;
          margin: 10px 0;
        }

        @media screen and (min-width: 450px) {
          h3 {
            font-size: 32px;
          }
          p {
            font-size: 16px;
          }
          .button {
            font-size: 18px;
          }
        }

        @media screen and (min-width: 600px) {
          .logo {
            width: 40px;
            height: 40px;
          }
          h3 {
            font-size: 40px;
          }
          p {
            font-size: 20px;
          }
          .button {
            font-size: 22px;
          }
        }

        @media screen and (min-width: 800px) {
          .divider {
            flex-direction: row;
            padding: 90px 0 0;
          }
          .studio {
            width: 50vw;
            height: 50vw;
          }
          .innovate {
            width: 50vw;
            height: 50vw;
          }
          .content {
            margin: 2.5vw auto;
            height: 45vw;
            width: 45vw;
          }
          .sparkle {
            top: calc(90px + 3.5vw);
            left: 34vw;
            height: 12vw;
            width: 12vw;
          }
          .sparkle-innovate {
            top: calc(90px + 3.5vw);
            left: 84vw;
          }
          .text-container {
            padding-bottom: 50px;
          }
          h3 {
            font-size: 32px;
            margin: 30px 0;
          }
          p {
            font-size: 14px;
          }
          .button {
            font-size: 16px;
          }
        }

        @media screen and (min-width: 1000px) {
          h3 {
            font-size: 40px;
            margin: 30px 0;
          }
          p {
            font-size: 18px;
          }
          .button {
            font-size: 20px;
          }
        }

        @media screen and (min-width: 1200px) {
          h3 {
            font-size: 48px;
          }
          p {
            font-size: 24px;
          }
          .button {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default FrontPage;
