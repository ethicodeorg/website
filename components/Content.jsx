import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import theme from '../styles/theme';
import FadeInBottom from './FadeInBottom';
import { useMediaQuery } from './utils/MediaQuery';

const Content = ({ paragraph, isDark, isFooter, useSteps }) => {
  const isBreakpoint = useMediaQuery(600);

  return (
    <div className="paragraph">
      {paragraph.title && (
        <h3 className={`paragraph-title paragraph-title-rotate${paragraph.titleRotate}`}>
          <FadeInBottom duration={0.7} animation={paragraph.titleRotate ? 'rotateIn' : 'fadeInUp'}>
            {paragraph.title}
          </FadeInBottom>
        </h3>
      )}
      {paragraph.text && (
        <FadeInBottom duration={0.7}>
          <p className="paragraph-text">{paragraph.text}</p>
        </FadeInBottom>
      )}
      {paragraph.image && (
        <FadeInBottom duration={0.7}>
          <a className="paragraph-image-link" href={paragraph.image.link} target="_blank">
            <img
              src={isBreakpoint ? paragraph.image.mobileImg : paragraph.image.img}
              alt="paragraph.image.img"
              className="picture"
            />
          </a>
        </FadeInBottom>
      )}
      {paragraph.about && (
        <FadeInBottom duration={0.5}>
          <p className="paragraph-about">{paragraph.about}</p>
        </FadeInBottom>
      )}
      {paragraph.smallText && (
        <FadeInBottom duration={0.7}>
          <p className="paragraph-small-text">{paragraph.smallText}</p>
        </FadeInBottom>
      )}
      {paragraph.email && (
        <FadeInBottom duration={0.7}>
          <a href={`mailto:${paragraph.email}`} className="paragraph-link">
            {paragraph.email}
          </a>
        </FadeInBottom>
      )}
      {paragraph.links && (
        <FadeInBottom duration={0.7}>
          <a href={paragraph.links[0].url} className="paragraph-link" target="_blank">
            {paragraph.links[0].linkText}
          </a>
        </FadeInBottom>
      )}
      {paragraph.socials && (
        <div className="socials">
          {paragraph.socials.map((network, iN) => (
            <div key={iN} className="social">
              <FadeInBottom duration={0.7} animation="rotateIn" delay={iN * 200}>
                <SocialIcon
                  url={network}
                  target="_blank"
                  style={{ height: isBreakpoint ? 50 : 70, width: isBreakpoint ? 50 : 70 }}
                  bgColor={iN === 0 ? theme.colors.pink : ''}
                />
              </FadeInBottom>
            </div>
          ))}
        </div>
      )}
      {paragraph.route && (
        <FadeInBottom duration={0.7}>
          <Link href={paragraph.route.route}>
            <a className="paragraph-link">{paragraph.route.text}</a>
          </Link>
        </FadeInBottom>
      )}

      <style jsx scoped>{`
        .paragraph {
          margin: 0 auto ${isDark ? '20px' : '0'};
          padding-bottom: ${useSteps ? '0' : '50px'};
          width: 555px;
        }
        .paragraph:nth-child(2n) {
          padding-top: ${useSteps ? '50px' : '0'};
        }
        .paragraph-contact {
          margin-bottom: 0;
        }
        .paragraph-title {
          display: block;
          font-size: 32px;
          margin: 0;
          padding: ${useSteps ? '30px' : '20px'} 0 20px;
          color: ${theme.colors.pink};
          font-style: italic;
        }
        .paragraph-title-rotate60 {
          display: inline-block;
          -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
        }
        .paragraph-title-rotate300 {
          display: inline-block;
          -webkit-transform: rotate(300deg);
          transform: rotate(300deg);
        }
        .paragraph-title-rotate120 {
          display: inline-block;
          -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
        }
        .paragraph-title-rotate200 {
          display: inline-block;
          -webkit-transform: rotate(200deg);
          transform: rotate(200deg);
        }
        .paragraph-about {
          padding: 0;
          color: ${theme.colors.yellow};
          font-size: 24px;
          font-style: italic;
        }
        .paragraph-text {
          display: ${isDark ? 'block' : 'inline-block'};
          margin-bottom: 0;
          margin-right: ${isDark ? '0' : '20px'};
          padding: 0;
          color: ${isDark ? theme.colors.lightText : theme.colors.text};
          font-size: 20px;
        }
        .paragraph-small-text {
          display: inline-block;
          padding: 0;
          color: ${theme.colors.text};
          font-size: 18px;
        }
        .paragraph-text-contact {
          display: inline-block;
          margin-right: 20px;
          color: ${theme.colors.text};
        }
        .paragraph-link {
          display: block;
          padding: 50px 0 10px;
          margin-right: 40px;
          text-decoration: none;
          color: ${isFooter ? theme.colors.yellow : theme.colors.blue};
          font-size: 21px;
        }
        .paragraph-link:hover {
          opacity: 0.7;
        }
        .picture {
          display: block;
          padding: 20px 0 0;
          width: 100%;
        }
        .picture:hover {
          opacity: 0.9;
        }
        .socials {
          display: flex;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        .social {
          margin: 10px 10px 0 0;
          transition: all 0.2s ease-in-out;
        }
        .social:hover {
          transform: scale(1.1);
        }

        @media screen and (min-width: 800px) {
          .paragraph {
            margin: 0 auto ${isDark ? '20px' : '0'};
          }
          .paragraph-contact {
            margin-bottom: 0;
          }
          .paragraph-title {
            padding: ${useSteps ? '60px' : '20px'} 0 20px;
            font-size: 48px;
          }
          .paragraph-title-why,
          .paragraph-title-how {
            padding: 0;
          }
          .paragraph-about {
            padding: 0;
          }
          .paragraph-text {
            padding: 0;
            font-size: 24px;
          }
          .paragraph-small-text {
            padding: 0;
            font-size: 24px;
          }
          .paragraph-link {
            display: inline-block;
            padding: 30px 0;
            font-size: 24px;
          }
          .picture {
            padding: 20px 0 0;
            width: 100%;
          }
        }

        @media screen and (min-width: 1200px) {
          .paragraph {
            margin: 0 0 ${isDark ? '20px' : '0'};
          }
          .paragraph-contact {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Content;
