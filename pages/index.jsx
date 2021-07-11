import { Fragment } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import FrontPage from '../components/FrontPage';
import PageContainer from '../components/PageContainer';

export default function Index() {
  return (
    <Fragment>
      <FrontPage />
      <PageContainer isDark>
        <About />
      </PageContainer>
      <PageContainer isDark>
        <Contact />
      </PageContainer>
    </Fragment>
  );
}
