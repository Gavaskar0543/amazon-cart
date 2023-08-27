import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-pulse">
        <img
          src="your-loading-image-url"
          alt="Loading"
          className="w-20 h-20 rounded-full border-4 border-blue-500"
        />
      </div>
    </div>
  );
};

export default Loading;
