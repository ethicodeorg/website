import '../styles/globals.css'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
          <div id="app" className="frontground">
            <Header />
            <div className="page-container">
              <Component {...pageProps} />
            </div>
          </div>
        )
}

export default MyApp
