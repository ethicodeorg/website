import { Fragment } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import FrontPage from '../components/FrontPage';
import PageContainer from '../components/PageContainer';

export default function Index() {
  return (
    <Fragment>
      <FrontPage />
      <PageContainer isDark isCover>
        <About />
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
            background: url('/lundi.jpg') no-repeat;
            background-position-x: 20%;
            background-position-y: 40%;
            background-size: cover;
            z-index: -1;
          }

          @media screen and (min-width: 1000px) {
            .bkgr-img {
              background-position-x: 0;
            }
          }
        `}
      </style>
    </Fragment>
  );
}
