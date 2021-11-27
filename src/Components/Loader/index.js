import React from "react";

function Loader() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 w-screen h-screen flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div
          className="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-purple-500
    "
        ></div>
      </div>
    </div>
  );
}

export default Loader;
