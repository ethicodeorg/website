import Link from 'next/link';
import React, { useState } from 'react';
import classNames from 'classnames';
import { SocialIcon } from 'react-social-icons';
import content from '../public/content.json';
import theme from '../styles/theme';
import FadeInBottom from './FadeInBottom';
import MainTitle from './MainTitle';

const Team = () => {
  const teamContent = content.Team;
  const [activeMember, setActiveMember] = useState();

  return (
    <section id="team">
      <MainTitle title={teamContent.mainTitle} isDark isTop />
      <FadeInBottom duration={0.7}>
        <div className="subtitle">
          <p className="subsubtitle">
            Ethicode was founded in 2020 around the side projects of its founder, Atli Sævar. Soon
            after, <span className="blue">passionate</span> volunteers joined the team who believed
            in the <span className="pink">mission</span>.
          </p>
          <p className="subsubtitle">Here are some of us.</p>
        </div>
      </FadeInBottom>
      <div className="team">
        {teamContent.members.map((member, iM) => (
          <div
            key={iM}
            className={classNames('member', {
              'active-member': activeMember === iM,
            })}
            onClick={() => setActiveMember(activeMember === iM ? undefined : iM)}
          >
            <FadeInBottom duration={0.7} animation="rotateIn">
              <img src={member.img} alt={member.name} className="member-pic" />
            </FadeInBottom>
            <FadeInBottom duration={1}>
              <div className="member-name">{member.name}</div>
              <div className="member-title">{member.title}</div>
            </FadeInBottom>
            {activeMember === iM && (
              <div className="socials">
                {member.networks.map((network, iN) => (
                  <div key={iN} className="social">
                    <FadeInBottom duration={0.7} animation="rotateIn" offset={0} delay={iN * 120}>
                      <SocialIcon
                        url={network}
                        target="_blank"
                        bgColor={
                          network.includes('mailto') ||
                          network.includes('carlosmarquezperez.com') ||
                          network.includes('laurabrown.uk')
                            ? theme.colors.pink
                            : ''
                        }
                        style={{ height: 40, width: 40 }}
                      />
                    </FadeInBottom>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx scoped>{`
        #team {
          max-width: 1200px;
          margin: 0 auto;
          text-align: left;
        }
        .subtitle {
          max-width: 700px;
          margin: 20px 0;
          font-size: 24px;
          font-style: italic;
          color: ${theme.colors.lightText};
        }
        .subsubtitle {
          width: 100%;
          text-align: left;
        }
        .pink {
          color: ${theme.colors.pink};
        }
        .yellow {
          color: ${theme.colors.yellow};
        }
        .blue {
          color: ${theme.colors.blue};
        }
        .team {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
          padding: 50px 0;
        }
        .member {
          text-align: center;
          margin: 20px 25px 60px;
          cursor: pointer;
        }
        .active-member {
          margin-bottom: 0;
        }
        .member-pic {
          width: 262.5px;
          clip-path: circle(125px at center);
          filter: grayscale(1);
        }
        .member-pic:hover {
          filter: none;
        }
        .member-name {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px 0 0;
          color: ${theme.colors.yellow};
          font-size: 24px;
          font-style: italic;
        }
        .member-title {
          color: ${theme.colors.lightText};
          font-size: 18px;
          font-style: italic;
        }
        .socials {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .social {
          margin: 5px;
          transition: all 0.2s ease-in-out;
        }
        .social:hover {
          transform: scale(1.1);
        }
        .link {
          text-decoration: none;
          color: ${theme.colors.blue};
        }

        @media screen and (min-width: 800px) {
          .team {
            width: calc(100% + 50px);
            margin: 0 -25px;
          }
          .member {
            margin: 20px 25px 60px;
          }
          .active-member {
            margin-bottom: 0;
          }
        }

        @media screen and (min-width: 1200px) {
          .member:nth-child(2n) {
            padding-top: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
