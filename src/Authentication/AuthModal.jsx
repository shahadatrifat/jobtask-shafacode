import { useEffect, useState } from "react";
import Signin from "../Authentication/SignIn";
import Signup from "../Authentication/SignUp";

export default function AuthModalManager() {
  const [signinOpen, setSigninOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("open-signin", () => setSigninOpen(true));
    window.addEventListener("open-signup", () => setSignupOpen(true));
    return () => {
      window.removeEventListener("open-signin", () => setSigninOpen(true));
      window.removeEventListener("open-signup", () => setSignupOpen(true));
    };
  }, []);

  return (
    <>
      <Signin open={signinOpen} onOpenChange={setSigninOpen} />
      <Signup open={signupOpen} onOpenChange={setSignupOpen} />
    </>
  );
}
