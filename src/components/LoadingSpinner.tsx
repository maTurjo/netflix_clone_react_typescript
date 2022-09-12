import React from "react";
import "../assets/css/loadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container flex justify-center h-[80vw] md:h-[90vh]">
      <div className="loading-spinner">
      </div>
    </div>
  );
}