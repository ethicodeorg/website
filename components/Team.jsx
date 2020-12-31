import content from '../public/content.json';
import theme from '../styles/theme';
import FadeInBottom from './FadeInBottom';
import MainTitle from './MainTitle';

const Team = () => {
  const teamContent = content.Team;
  return (
    <section id="team">
      <MainTitle title={teamContent.mainTitle} isDark />
      <FadeInBottom duration={0.7}>
        <div className="subtitle">{teamContent.subtitle}</div>
      </FadeInBottom>
      <div className="team">
        {teamContent.members.map((member, iM) => (
          <div key={iM} className="member">
            <FadeInBottom duration={0.7} animation="rotateIn">
              <img src={member.img} alt={member.name} className="member-pic" />
            </FadeInBottom>
            <FadeInBottom duration={1}>
              <div className="member-name">{member.name}</div>
              <div className="member-title">{member.title}</div>
            </FadeInBottom>
          </div>
        ))}
      </div>

      <style jsx scoped>{`
        .team {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          text-align: left;
          padding: 50px 0;
        }
        .subtitle {
          max-width: 1200px;
          margin: 20px auto;
          font-size: 24px;
          font-style: italic;
          color: ${theme.colors.lightText};
        }
        .member {
          width: 250px;
          text-align: center;
          margin-bottom: 40px;
        }
        .member:nth-child(2n) {
          padding-top: 50px;
        }
        .member-pic {
          width: 250px;
          clip-path: circle(125px at center);
          filter: grayscale(1);
        }
        .member-pic:hover {
          filter: none;
        }
        .member-name {
          margin: 10px 0 0;
          color: ${theme.colors.yellow};
          font-size: 24px;
          font-style: italic;
        }
        .member-title {
          color: ${theme.colors.yellow};
          font-size: 18px;
          font-style: italic;
        }
      `}</style>
    </section>
  );
};

export default Team;
