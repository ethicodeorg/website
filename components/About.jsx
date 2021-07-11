import content from '../public/content.json';
import Content from './Content';
import MainTitle from './MainTitle';
import Ethicode from './Ethicode';

const About = () => {
  const aboutContent = content.About;
  return (
    <section id="about">
      <div className="ethicode">
        <Ethicode />
      </div>

      <MainTitle title={content.About.mainTitle} isDark />

      <div className="about">
        {aboutContent.paragraphs.map((paragraph, iP) => (
          <Content key={iP} paragraph={paragraph} isDark useSteps />
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
