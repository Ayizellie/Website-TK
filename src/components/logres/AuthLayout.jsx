import React from 'react';

const AuthLayout = ({ imageSrc, children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 hidden md:block">
        <img src={imageSrc} alt="Auth visual" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 flex items-start justify-center p-6 mt-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
