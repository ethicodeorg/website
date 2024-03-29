import { FaChevronDown, FaMouse } from 'react-icons/fa';
import theme from '../styles/theme';
import StudioHeadline from './StudioHeadline';
import InnovationHeadline from './InnovationHeadline';

const SideFront = ({ title, isStudio, isInnovation }) => {
  return (
    <div className="side-front">
      <div className="eyeball">
        <div className="bigball" />
        <div className="ball" />
        <div className="smallball" />
      </div>
      <div className="headline">
        <h2>{title}</h2>
        <h4>
          {isStudio && <StudioHeadline />}
          {isInnovation && <InnovationHeadline />}
        </h4>
      </div>
      <div className="scroll">
        <div className="mouse">
          <FaMouse />
        </div>
        <div className="arrows">
          <div className="arrow arrow1">
            <FaChevronDown />
          </div>
          <div className="arrow arrow2">
            <FaChevronDown />
          </div>
          <div className="arrow arrow3">
            <FaChevronDown />
          </div>
        </div>
      </div>

      <style jsx scoped>{`
        .side-front {
          height: 500px;
          padding: 33vh 20px 0;
          background-color: rgba(255, 255, 255, 0.5);
        }
        .eyeball {
          z-index: -1;
        }
        .bigball,
        .ball,
        .smallball {
          position: absolute;
          border-radius: 100%;
        }
        .bigball {
          top: 400px;
          left: 400px;
          height: 350px;
          width: 350px;
          background-color: ${isStudio ? theme.colors.yellow : theme.colors.blue};
          overflow: hidden;
          -webkit-animation: bigslide 1.5s forwards;
          animation: bigslide 1.5s forwards;
        }
        .ball {
          top: 40px;
          left: 400px;
          height: 240px;
          width: 240px;
          background-color: ${theme.colors.darkBackground};
          -webkit-animation: mediumslide 1.5s forwards;
          animation: mediumslide 1.5s forwards;
        }
        .smallball {
          top: 0px;
          left: 500px;
          height: 50px;
          width: 50px;
          background-color: ${theme.colors.lightText};
          -webkit-animation: smallslide 1.5s forwards;
          animation: smallslide 1.5s forwards;
        }
        .headline {
          position: absolute;
          top: 400px;
          left: 50px;
          z-index: 1;
          -webkit-animation: textslide 1.5s forwards;
          animation: textslide 1.5s forwards;
        }
        h2 {
          margin: 0 auto;
          font-size: 22px;
          text-align: left;
          color: ${theme.colors.lightText};
          z-index: 2;
        }
        h4 {
          margin: 200px 0 0 -25px;
          padding: 10px;
          width: calc(100vw - 20px);
          background-color: rgba(255, 255, 255, 0.5);
          color: ${theme.colors.text};
          font-size: 14px;
          text-align: left;
          font-style: italic;
        }
        .scroll {
          display: none;
          position: absolute;
          right: 5%;
          top: 90%;
          font-size: 30px;
          color: ${theme.colors.pink};
          -webkit-animation: mouseslide 1.5s forwards;
          animation: mouseslide 1.5s forwards;
        }
        .mouse {
          color: ${theme.colors.white};
        }
        .arrows {
          font-size: 16px;
          color: ${theme.colors.pink};
        }
        .arrow {
          opacity: 0%;
          height: 10px;
          display: flex;
          justify-content: center;
          -webkit-animation: arrowappear 3s forwards infinite;
          animation: arrowappear 3s forwards infinite;
        }
        .arrow2 {
          animation-delay: 0.1.5s;
        }
        .arrow3 {
          animation-delay: 0.2s;
        }

        @media screen and (min-width: 600px) {
          .side-front {
            height: 370px;
            padding: 340px 250px 0;
          }
          h2 {
            font-size: 36px;
          }
          h4 {
            width: unset;
            margin: 0 auto;
            padding: 20px 0 0;
            color: ${theme.colors.lightText};
            background-color: transparent;
            font-size: 16px;
          }
          .bigball,
          .ball,
          .smallball {
            position: absolute;
          }
          .bigball {
            top: 400px;
            left: 400px;
            height: 650px;
            width: 650px;
            -webkit-animation: bigslide600 1.5s forwards;
            animation: bigslide600 1.5s forwards;
          }
          .ball {
            top: 40px;
            left: 400px;
            height: 400px;
            width: 400px;
            -webkit-animation: mediumslide600 1.5s forwards;
            animation: mediumslide600 1.5s forwards;
          }
          .smallball {
            top: 0px;
            left: 500px;
            height: 80px;
            width: 80px;
            -webkit-animation: smallslide600 1.5s forwards;
            animation: smallslide600 1.5s forwards;
          }
          .headline {
            top: 150px;
            left: 50px;
            -webkit-animation: textslide600 1.5s forwards;
            animation: textslide600 1.5s forwards;
          }
          .scroll {
            display: block;
          }
        }

        @media screen and (min-width: 800px) {
          .side-front {
            height: 370px;
            padding: 340px 250px 0;
          }
          h2 {
            font-size: 48px;
          }
          h4 {
            padding-top: 20px;
            color: ${theme.colors.lightText};
            font-size: 20px;
          }
          .bigball,
          .ball,
          .smallball {
            position: absolute;
          }
          .bigball {
            top: 400px;
            left: 400px;
            height: 850px;
            width: 850px;
            -webkit-animation: bigslide800 1.5s forwards;
            animation: bigslide800 1.5s forwards;
          }
          .ball {
            top: 40px;
            left: 400px;
            height: 500px;
            width: 500px;
            -webkit-animation: mediumslide800 1.5s forwards;
            animation: mediumslide800 1.5s forwards;
          }
          .smallball {
            top: 0px;
            left: 500px;
            height: 100px;
            width: 100px;
            -webkit-animation: smallslide800 1.5s forwards;
            animation: smallslide800 1.5s forwards;
          }
          .headline {
            top: 150px;
            left: 50px;
            -webkit-animation: textslide800 1.5s forwards;
            animation: textslide800 1.5s forwards;
          }
        }

        @media screen and (min-width: 1200px) {
          .side-front {
            height: 650px;
          }
          h2 {
            font-size: 64px;
          }
          h4 {
            padding-top: 30px;
            font-size: 24px;
          }
          .bigball {
            top: 400px;
            left: 400px;
            height: 1200px;
            width: 1200px;
            -webkit-animation: bigslide1200 1.5s forwards;
            animation: bigslide1200 1.5s forwards;
          }
          .ball {
            top: 40px;
            left: 400px;
            height: 700px;
            width: 700px;
            -webkit-animation: mediumslide1200 1.5s forwards;
            animation: mediumslide1200 1.5s forwards;
          }
          .smallball {
            top: 0px;
            left: 500px;
            height: 150px;
            width: 150px;
            -webkit-animation: smallslide1200 1.5s forwards;
            animation: smallslide1200 1.5s forwards;
          }
          .headline {
            top: 300px;
            left: 50px;
            -webkit-animation: textslide1200 1.5s forwards;
            animation: textslide1200 1.5s forwards;
          }
        }

        @-webkit-keyframes mediumslide {
          100% {
            top: 152px;
            left: 5px;
          }
        }
        @keyframes mediumslide {
          100% {
            top: 152px;
            left: 5px;
          }
        }

        @-webkit-keyframes mediumslide800 {
          100% {
            top: 120px;
            left: 110px;
          }
        }
        @keyframes mediumslide800 {
          100% {
            top: 120px;
            left: 110px;
          }
        }

        @-webkit-keyframes mediumslide600 {
          100% {
            top: 120px;
            left: 65px;
          }
        }
        @keyframes mediumslide600 {
          100% {
            top: 120px;
            left: 65px;
          }
        }

        @-webkit-keyframes mediumslide1200 {
          100% {
            top: 140px;
            left: 190px;
          }
        }
        @keyframes mediumslide1200 {
          100% {
            top: 140px;
            left: 190px;
          }
        }

        @-webkit-keyframes bigslide {
          100% {
            top: 100px;
            left: -50px;
          }
        }
        @keyframes bigslide {
          100% {
            top: 100px;
            left: -50px;
          }
        }

        @-webkit-keyframes bigslide600 {
          100% {
            top: 0px;
            left: -60px;
          }
        }
        @keyframes bigslide600 {
          100% {
            top: 0px;
            left: -60px;
          }
        }

        @-webkit-keyframes bigslide800 {
          100% {
            top: -40px;
            left: -60px;
          }
        }
        @keyframes bigslide800 {
          100% {
            top: -40px;
            left: -60px;
          }
        }

        @-webkit-keyframes bigslide1200 {
          100% {
            top: -100px;
            left: -50px;
          }
        }
        @keyframes bigslide1200 {
          100% {
            top: -100px;
            left: -50px;
          }
        }

        @-webkit-keyframes smallslide {
          100% {
            top: 170px;
            left: 190px;
          }
        }
        @keyframes smallslide {
          100% {
            top: 170px;
            left: 190px;
          }
        }

        @-webkit-keyframes smallslide600 {
          100% {
            top: 150px;
            left: 380px;
          }
        }
        @keyframes smallslide600 {
          100% {
            top: 150px;
            left: 380px;
          }
        }

        @-webkit-keyframes smallslide800 {
          100% {
            top: 150px;
            left: 480px;
          }
        }
        @keyframes smallslide800 {
          100% {
            top: 150px;
            left: 480px;
          }
        }

        @-webkit-keyframes smallslide1200 {
          100% {
            top: 170px;
            left: 710px;
          }
        }
        @keyframes smallslide1200 {
          100% {
            top: 170px;
            left: 710px;
          }
        }

        @-webkit-keyframes textslide {
          100% {
            top: 250px;
            left: 24px;
          }
        }
        @keyframes textslide {
          100% {
            top: 250px;
            left: 24px;
          }
        }

        @-webkit-keyframes textslide600 {
          100% {
            top: 230px;
            left: 100px;
          }
        }
        @keyframes textslide600 {
          100% {
            top: 230px;
            left: 100px;
          }
        }

        @-webkit-keyframes textslide800 {
          100% {
            top: 250px;
            left: 150px;
          }
        }
        @keyframes textslide800 {
          100% {
            top: 250px;
            left: 150px;
          }
        }

        @-webkit-keyframes textslide1200 {
          100% {
            top: 370px;
            left: 270px;
          }
        }
        @keyframes textslide1200 {
          100% {
            top: 370px;
            left: 270px;
          }
        }

        @-webkit-keyframes mouseslide {
          100% {
            top: 80%;
            right: 10%;
          }
        }
        @keyframes mouseslide {
          100% {
            top: 80%;
            right: 10%;
          }
        }

        @-webkit-keyframes arrowappear {
          70% {
            opacity: 0%;
          }
          90% {
            opacity: 100%;
          }
          100% {
            opacity: 0%;
          }
        }
        @keyframes arrowappear {
          70% {
            opacity: 0%;
          }
          90% {
            opacity: 100%;
          }
          100% {
            opacity: 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default SideFront;
