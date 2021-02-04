import "../styles/globals.css";
import { ProviderAuth } from "../services/useAuthtintication";

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
      <Component {...pageProps} />
    </ProviderAuth>
  );
}

export default MyApp;
