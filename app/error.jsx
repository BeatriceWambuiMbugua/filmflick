"use client";
import { useEffect } from "react";
import React from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="mt-20" style={{ textAlign: "center" }}>
      <h2>Something went wrong!</h2>

      <button
        className="hover:text-[#BE123C]"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
