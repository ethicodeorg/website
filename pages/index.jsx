import { Fragment } from 'react';
import Contact from '../components/Contact';
import FrontPage from '../components/FrontPage';
import Work from '../components/Work';
import PageContainer from '../components/PageContainer';
import Process from '../components/Process';

export default function Index() {
  return (
    <Fragment>
      <div className="ethicode">
        <FrontPage />
      </div>
      <PageContainer>
        <Process />
      </PageContainer>
      <PageContainer>
        <Work />
      </PageContainer>
      <PageContainer isDark>
        <Contact />
      </PageContainer>
    </Fragment>
  );
}
