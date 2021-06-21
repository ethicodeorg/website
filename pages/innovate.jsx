import { Fragment } from 'react';
import Work from '../components/Work';
import PageContainer from '../components/PageContainer';
import Contact from '../components/Contact';
import InnovationFront from '../components/InnovationFront';

export default function WorkPage() {
  return (
    <Fragment>
      <InnovationFront />
      <PageContainer>
        <Work />
      </PageContainer>
      <PageContainer isDark>
        <Contact />
      </PageContainer>
    </Fragment>
  );
}
