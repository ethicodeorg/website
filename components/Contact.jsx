import content from '../public/content.json';
import MainTitle from './MainTitle';
import Content from './Content';

const Contact = () => {
  const contactContent = content.Contact;
  return (
    <section id="contact">
      <MainTitle title={contactContent.mainTitle} />

      <div className="contact">
        {contactContent.paragraphs.map((paragraph, iP) => (
          <Content key={iP} paragraph={paragraph} />
        ))}
      </div>

      <style>{`
        .contact {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          text-align: left;
          padding: 50px 0;
        }
      `}</style>
    </section>
  );
};

export default Contact;
