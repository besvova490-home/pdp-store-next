import { AppProps } from "next/dist/shared/lib/router/router";
import { IntercomProvider } from "react-use-intercom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ToastContainer } from "react-toastify";


//styles
import "../assets/scss/index.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RE_CAPTCHA_SITE_KEY}>
      <IntercomProvider appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID} autoBoot>
        <Component {...pageProps} />
        <ToastContainer/>
      </IntercomProvider>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
