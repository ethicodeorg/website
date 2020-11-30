import content from '../public/content.json';
const workContent = content.Work;

const getImgUrl = (pic) => {
  return require('../public/assets/' + pic);
};

const Work = () => {
  let workContentString = '';

  workContent.paragraphs.forEach((paragraph) => {
    /* workContentString = workContentString + 
        `<h3 class="paragraph-title">${paragraph.title}</h3>
        <img
            src=${getImgUrl(paragraph.image.img)}
            v-bind:alt="p.image.img"
            class="picture-${paragraph.image.name}"
        />
        <p>${paragraph.smallText}</p>` */
    workContentString =
      workContentString +
      `<h3 class="paragraph-title">${paragraph.title}</h3>
        <p>${paragraph.smallText}</p>
        <a href="${paragraph.links[0].url}" class="paragraph-link" target="_blank" rel="noopener noreferer">${paragraph.links[0].linkText}</a>`;
  });

  return (
    <section id="work">
      <h2 className="main-title animate slide-up animate-active">{workContent.mainTitle}</h2>

      <div dangerouslySetInnerHTML={{ __html: workContentString }}></div>

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
