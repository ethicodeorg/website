import content from '../public/content.json';

const Contact = () => {
  const contactContent = content.Contact;
  return (
    <section id="contact">
      <h2 className="main-title">{contactContent.mainTitle}</h2>

      {contactContent.paragraphs.map((paragraph, iP) => (
        <div key={iP}>
          <p>{paragraph.text}</p>
        </div>
      ))}

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

export default Contact;
