import type { AppProps } from "next/app";
import { CarritoProvider } from "src/context/CarrtitoContext";
import { RecoilRoot } from "recoil";
import "src/styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CarritoProvider>
        <Component {...pageProps} />
      </CarritoProvider>
    </RecoilRoot>
  );
}

export default MyApp;
