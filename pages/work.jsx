import { Fragment } from 'react';
import Work from '../components/Work';
import PageContainer from '../components/PageContainer';
import Contact from '../components/Contact';

export default function WorkPage() {
  return (
    <Fragment>
      <PageContainer>
        <Work isTop />
      </PageContainer>
      <PageContainer isDark>
        <Contact />
      </PageContainer>
    </Fragment>
  );
}
