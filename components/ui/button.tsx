import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, type = 'button' }: ButtonProps) {
  return (
    <button type={type} className="btn-primary inline-flex items-center justify-center rounded-md">
      {children}
    </button>
  );
}
