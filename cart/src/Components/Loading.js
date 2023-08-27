import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-pulse">
        {/* <img
          srco={"https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying.gif"}
          alt="Loading"
          className="w-20 h-20 rounded-full border-4 border-blue-500"
        /> */}
         <video autoPlay    className="w-20 h-20 rounded-full border-4 border-blue-500">
        <source src="https://thumbs.gfycat.com/DisastrousUnnaturalApisdorsatalaboriosa-mobile.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  );
};

export default Loading;
