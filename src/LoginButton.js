// LoginButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      style={{
        background: "#1e3c72",
        color: "white",
        border: "none",
        padding: "15px 30px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      Welcome Aboard
    </button>
  );
};

export default LoginButton;
