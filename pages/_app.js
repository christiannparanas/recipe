import "../styles/globals.scss";
import { IconContext } from "react-icons";

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  );
}

export default MyApp;
