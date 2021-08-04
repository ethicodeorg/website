import { Fragment } from 'react';
import Work from '../components/Work';
import PageContainer from '../components/PageContainer';
import Contact from '../components/Contact';
import InnovationFront from '../components/InnovationFront';

export default function WorkPage() {
  return (
    <Fragment>
      <InnovationFront />
      <PageContainer isCover>
        <Work />
      </PageContainer>
      <PageContainer isDark>
        <Contact />
      </PageContainer>
      <div className="bkgr-img" />

      <style jsx>
        {`
          .bkgr-img {
            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0px;
            background: url('/fljuga.jpg') no-repeat;
            background-position: 50%;
            background-size: cover;
            z-index: -1;
          }
        `}
      </style>
    </Fragment>
  );
}
