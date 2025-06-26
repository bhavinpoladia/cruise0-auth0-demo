import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null; // Don't show logout button if not logged in
  }

  return (
    <button
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin },
        })
      }
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginLeft: "10px",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
