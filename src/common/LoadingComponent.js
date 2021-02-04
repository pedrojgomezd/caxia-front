import React from "react";
import { Loader } from "react-feather";

const LoadingComponent = () => (
  <div className="w-full h-screen flex items-center justify-center text-white bg-blue-600">
    <Loader size={34} className="animate-spin" />
    <div className="ml-4">Loading...</div>
  </div>
);

export default LoadingComponent;
