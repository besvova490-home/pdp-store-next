import { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

//helpers
import auth from "../helpers/api/auth/auth";


function AuthCallback(): JSX.Element {
  const router = useRouter();

  const { query } = router;

  useEffect(() => {
    if (query.code) {
      auth.loginGitHub({ code: `${query.code}` })
        .then(() => router.push("/profile?tab=user-information"))
        .catch(e => {
          toast.error(e);
          router.push("/login");
        });
    }
  }, [query.code]);


  return (
    <div/>
  );
}

export default AuthCallback;
