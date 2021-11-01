import { AppProps } from "next/dist/shared/lib/router/router";
import { IntercomProvider } from "react-use-intercom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "../assets/scss/index.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RE_CAPTCHA_SITE_KEY}>
      <IntercomProvider appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID} autoBoot>
        <Component {...pageProps} />
      </IntercomProvider>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
