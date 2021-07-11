import { Fragment } from 'react';
import StudioFront from '../components/StudioFront';
import PageContainer from '../components/PageContainer';
import Contact from '../components/Contact';
import Process from '../components/Process';

export default function StudioPage() {
  return (
    <Fragment>
      <StudioFront />
      <PageContainer>
        <Process />
      </PageContainer>
      <PageContainer isDark>
        <Contact />
      </PageContainer>
    </Fragment>
  );
}
