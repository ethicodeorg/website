import content from '../public/content.json';
import Content from './Content';
import MainTitle from './MainTitle';

const About = () => {
  const aboutContent = content.About;
  return (
    <section id="about">
      <MainTitle title={content.About.mainTitle} isDark />

      <div className="about">
        {aboutContent.paragraphs.map((paragraph, iP) => (
          <Content key={iP} paragraph={paragraph} isDark />
        ))}
      </div>

      <style jsx scoped>{`
        .about {
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

export default About;
