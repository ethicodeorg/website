import { Fragment } from 'react';
import StudioFront from '../components/StudioFront';
import PageContainer from '../components/PageContainer';
import Contact from '../components/Contact';
import Process from '../components/Process';

export default function StudioPage() {
  return (
    <Fragment>
      <StudioFront />
      <PageContainer isCover>
        <Process />
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
            background: url('/iceland.jpg') no-repeat;
            background-position: 50%;
            background-size: cover;
            z-index: -1;
          }
        `}
      </style>
    </Fragment>
  );
}
