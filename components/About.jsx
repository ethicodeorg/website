import content from '../public/content.json';
const aboutContent = content.About;

const About = () => {
  let aboutContentString = '';

  aboutContent.paragraphs.forEach((paragraph) => {
    aboutContentString =
      aboutContentString +
      `<div class="paragraph"><h3 class="paragraph-title paragraph-title-rotate${paragraph.titleRotate}">${paragraph.title}</h3><p class="paragraph-text">${paragraph.text}</p><style>p {display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;}</style></div>`;
  });

  return (
    <section id="about">
      <h2 className="main-title">{aboutContent.mainTitle}</h2>

      <div className="front-page" dangerouslySetInnerHTML={{ __html: aboutContentString }}></div>

      <style jsx scoped>{`
        .main-title {
          max-width: 1200px;
          padding-top: 100px;
          margin: 0 auto;
          font-size: 36px;
          text-align: left;
          line-height: 50px;
          color: #00bad4;
          -webkit-animation: fadeInBottom 1s;
          animation: fadeInBottom 1s;
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
    </section>
  );
};

export default About;
