import React from "react";
import styles from "./Button.module.scss";
import { useAuth0 } from  "@auth0/auth0-react";

const Button = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
};

export default Button;
