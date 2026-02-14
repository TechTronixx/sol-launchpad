"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          color: "#faf8f3",
          fontFamily: "monospace",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 400, padding: 24 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 8,
              letterSpacing: "0.05em",
            }}
          >
            CRITICAL_SYSTEM_ERROR
          </h2>
          <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 24 }}>
            {error.message || "A fatal error occurred in the application root."}
          </p>
          <button
            onClick={reset}
            style={{
              padding: "12px 24px",
              backgroundColor: "#2dd4bf",
              color: "#050505",
              border: "none",
              fontWeight: 700,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            FORCE_RESTART
          </button>
        </div>
      </body>
    </html>
  );
}
