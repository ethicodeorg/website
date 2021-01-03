import { Fragment } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Ethicode from '../components/Ethicode';
import Work from '../components/Work';
import PageContainer from '../components/PageContainer';
import Team from '../components/Team';

export default function Index() {
  return (
    <Fragment>
      <div className="ethicode">
        <Ethicode />
      </div>
      <PageContainer>
        <Work />
      </PageContainer>
      <PageContainer isDark>
        <About />
      </PageContainer>
      <PageContainer isDark>
        <Team />
      </PageContainer>
      <PageContainer>
        <Contact />
      </PageContainer>
    </Fragment>
  );
}
