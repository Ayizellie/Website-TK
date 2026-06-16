import React from 'react';

const Button = ({ children, onClick, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
  >
    {children}
  </button>
);

export default Button;
