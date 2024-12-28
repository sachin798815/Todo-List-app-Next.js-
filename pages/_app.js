import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponet from "../Components/Header/NavComponent";

function MyApp({ Component, pageProps }) {
  return (
  <>
  <NavComponet/>
  <Component {...pageProps} />
  </>)
}

export default MyApp
