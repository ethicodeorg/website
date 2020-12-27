import content from '../public/content.json';

const Work = () => {
  const workContent = content.Work;
  const getImgUrl = (pic) => {
    if (typeof window !== 'undefined') {
      pic = Function('"use strict";return (' + pic + ')')();
    } else {
      let picArray = pic.toString().split(':');
      pic = picArray[1].replace(/[',' ']/g, '');
    }

    return '../assets/' + pic;
  };

  return (
    <section id="work">
      <h2 className="main-title">{workContent.mainTitle}</h2>

      <div className="front-page">
        {workContent.paragraphs.map((paragraph, iP) => (
          <div key={iP} className="paragraph">
            <h3 className="paragraph-title">{paragraph.title}</h3>
            <img src={getImgUrl(paragraph.image.img)} alt="p.image.img" className="picture" />
            <p className="paragraph-small-text">{paragraph.smallText}</p>
            <a
              href={paragraph.links[0].url}
              className="paragraph-link"
              target="_blank"
              rel="noopener noreferer"
            >
              {paragraph.links[0].linkText}
            </a>
          </div>
        ))}
      </div>

      <style jsx scoped>{`
        .main-title {
          max-width: 1200px;
          padding-top: 100px;
          margin: 0 auto;
          font-size: 36px;
          text-align: left;
          line-height: 50px;
          color: #222;
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

export default Work;
