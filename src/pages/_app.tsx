import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "src/styles/globals.css"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;