import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./App.css";

function App() {
  const { user, isAuthenticated, isLoading, error, loginWithRedirect } =
    useAuth0();

  if (isLoading) {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "18px",
            color: "#1e3c72",
            background: "linear-gradient(135deg, #0077be 0%, #004d7a 100%)",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    const isEmailVerificationError =
      error.message.includes("verify your email");

    return (
      <div className="App">
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(135deg, #0077be 0%, #004d7a 100%)",
            minHeight: "100vh",
            color: "white",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              color: "#1e3c72",
              padding: "40px",
              borderRadius: "15px",
              maxWidth: "500px",
              margin: "0 auto",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            {isEmailVerificationError ? (
              <>
                <h2>Email Verification Required</h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    marginBottom: "20px",
                  }}
                >
                  Welcome!
                </p>
                <div
                  style={{
                    background: "#fff3cd",
                    border: "1px solid #ffeaa7",
                    borderRadius: "8px",
                    padding: "15px",
                    marginBottom: "20px",
                    color: "#856404",
                  }}
                >
                  <strong>Please verify your email address!</strong>
                  <br />
                  Check your inbox for a verification email and click the link
                  to verify your account.
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginBottom: "20px",
                  }}
                >
                  Can't find the email? Check your spam folder. After verifying,
                  try logging in again.
                </p>
                <button
                  onClick={() => loginWithRedirect()}
                  style={{
                    background: "#28a745",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Try Login Again
                </button>
              </>
            ) : (
              <>
                <h2>Authentication Error</h2>
                <p>{error.message}</p>
                <button
                  onClick={() => loginWithRedirect()}
                  style={{
                    background: "#1e3c72",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "20px",
                  }}
                >
                  Try Again
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return (
      <div className="App">
        <div
          style={{
            textAlign: "center",
            padding: "50px",
            background: "linear-gradient(135deg, #0077be 0%, #004d7a 100%)",
            minHeight: "100vh",
            color: "white",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              color: "#1e3c72",
              padding: "40px",
              borderRadius: "15px",
              maxWidth: "600px",
              margin: "0 auto",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <h1>Welcome, {user.name}!</h1>

            <div
              style={{
                textAlign: "left",
                maxWidth: "300px",
                margin: "20px auto",
              }}
            >
              <p>
                <strong>User:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              {user["https://cruise0.app/country"] && (
                <p>
                  <strong>Country:</strong>{" "}
                  {user["https://cruise0.app/country"]}
                </p>
              )}
            </div>

            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          background: "linear-gradient(135deg, #0077be 0%, #004d7a 100%)",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            color: "#1e3c72",
            padding: "40px",
            borderRadius: "15px",
            maxWidth: "500px",
            margin: "0 auto",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <h1>Welcome to Cruise0</h1>
          <p style={{ fontSize: "18px", marginBottom: "30px" }}>
            Please log in to start booking your cruise adventure!
          </p>

          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default App;
