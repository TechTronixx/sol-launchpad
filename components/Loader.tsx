"use client";
import { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //hide loader after 2s
      setShowLoader(false);
    }, 2000);
  }, []);

  if (showLoader)
    return (
      <div className="fixed flex justify-center items-center top-0 z-[99] overflow-hidden w-full h-screen bg-black/10 backdrop-none">
        <div className="ui-abstergo">
          <div className="abstergo-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="ui-text">
            L O A D I N G <div className="ui-dot"></div>
            <div className="ui-dot"></div>
            <div className="ui-dot"></div>
          </div>
        </div>
      </div>
    );
};

export default Loader;
