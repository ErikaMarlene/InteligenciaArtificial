import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

const LoadingSpinner = () => {
  return (
    <div>
      <ClipLoader
        color="#7c7ce3"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
