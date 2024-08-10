import React from 'react';

interface ButtonProps {
  children: React.ReactNode; 
  onClick?: () => Promise<void> | void; 
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 text-white bg-black rounded hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;