import Link from 'next/link';
import theme from '../styles/theme';
import FadeInBottom from './FadeInBottom';

const Content = ({ paragraph, isDark }) => {
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
          <img src={paragraph.image.img} alt="paragraph.image.img" className="picture" />
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
          width: 555px;
        }
        .paragraph:nth-child(2n) {
          padding-top: 50px;
        }
        .paragraph-contact {
          margin-bottom: 0;
        }
        .paragraph-title {
          display: block;
          font-size: 32px;
          margin: 0;
          padding: 30px 0 20px;
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
          margin-right: ${isDark ? '0' : '20px'};
          padding: 0;
          color: ${isDark ? theme.colors.lightText : theme.colors.text};
          font-size: 24px;
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
          padding: 10px 0;
          margin-right: 40px;
          text-decoration: none;
          color: ${theme.colors.blue};
          font-size: 21px;
        }
        .paragraph-link:hover {
          opacity: 0.7;
        }
        .picture {
          display: block;
          padding: 0;
          width: 100%;
        }

        @media screen and (min-width: 800px) {
          .paragraph {
            margin: 0 auto ${isDark ? '20px' : '0'};
          }
          .paragraph-contact {
            margin-bottom: 0;
          }
          .paragraph-title {
            padding: 60px 0 20px;
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
            font-size: 32px;
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
            padding: 0;
            width: 100%;
          }
        }

        @media screen and (min-width: 1200px) {
          .paragraph {
            margin: 0 0 ${isDark ? '80px' : '0'};
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
