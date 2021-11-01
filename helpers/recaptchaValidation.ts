declare global {
  interface Window {
    grecaptcha: any;
  }
}


function recaptchaValidation(): Promise<string> {
  if (typeof window === "undefined") return;

  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(process.env.NEXT_PUBLIC_GOOGLE_RE_CAPTCHA_SITE_KEY).then(token => {
        resolve(token);
      },
      reject);
    }
    );
  });
}

export default recaptchaValidation;
