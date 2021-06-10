import { FaCogs, FaEye, FaPencilAlt, FaRocket, FaRuler } from 'react-icons/fa';
import theme from '../styles/theme';
import FadeInBottom from './FadeInBottom';
import JourneyCard from './JourneyCard';
import MainTitle from './MainTitle';

const Process = () => {
  return (
    <section id="work">
      <MainTitle title="The journey" />

      <div className="process">
        <FadeInBottom duration={0.5}>
          <JourneyCard
            topIcon={<FaEye color={theme.colors.pink} />}
            title="Discover"
            text="The meeting of the minds is the baseline for everything. We want to feel inspired when working for your mission, so it’s crucial that it aligns with"
            link={{
              href: '/about',
              text: ' ours.',
            }}
          />
        </FadeInBottom>
        <FadeInBottom duration={0.7}>
          <JourneyCard
            topIcon={<FaPencilAlt color={theme.colors.blue} />}
            title="Estimate"
            text="As we fully understand your problem we can reach an agreement on cost and time of delivery. We won’t over-charge or over-promise, but we might over-deliver."
          />
        </FadeInBottom>
        <FadeInBottom duration={0.9}>
          <JourneyCard
            topIcon={<FaRuler color={theme.colors.pink} />}
            title="Design"
            text="Before we start coding, we design everything – the visuals, the user experience, the functionality, and the structure of the application."
          />
        </FadeInBottom>
        <FadeInBottom duration={1.1}>
          <JourneyCard
            topIcon={<FaCogs color={theme.colors.blue} />}
            title="Build"
            text="While bringing your vision to reality, you can frequently communicate with our developers to discuss any details or updates on the progress."
          />
        </FadeInBottom>
        <FadeInBottom duration={1.3}>
          <JourneyCard
            topIcon={<FaRocket color={theme.colors.pink} />}
            title="Launch"
            text="We make sure to test everything thoroughly before launching and will happily make as many iterations as you want to improve even further."
          />
        </FadeInBottom>
      </div>

      <style jsx scoped>{`
        .process {
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

export default Process;
