import '../styles/globals.css'
import Layout from "../components/MyLayout";

function EthicodeApp({ Component, pageProps }) {
  return (
          <Layout>
              <Component {...pageProps} />
          </Layout>
        )
}

export default EthicodeApp
