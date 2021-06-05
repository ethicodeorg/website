import content from '../public/content.json';
import Content from './Content';
import MainTitle from './MainTitle';

const Work = ({ isTop }) => {
  const workContent = content.Work;

  return (
    <section id="work">
      <MainTitle title={workContent.mainTitle} isTop={isTop} />

      <div className="work">
        {workContent.paragraphs.map((paragraph, iP) => (
          <Content key={iP} paragraph={paragraph} />
        ))}
      </div>

      <style jsx scoped>{`
        .work {
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

export default Work;
