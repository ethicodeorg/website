import { Fragment } from 'react';
// import the various components of the page
import About from '../components/About';
import Contact from '../components/Contact';
import Ethicode from '../components/Ethicode';
import Work from '../components/Work';

export default function Index() {
  return (
    <Fragment>
      <div className="ethicode">
        <Ethicode />
      </div>
      <div className="page-container">
        <Work />
      </div>
      <div className="page-container page-container-dark">
        <About />
      </div>
      <div className="page-container">
        <Contact />
      </div>
    </Fragment>
  );
}
