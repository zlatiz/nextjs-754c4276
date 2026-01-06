import React from "react";

interface InputProps {
  placeholder?: string;
}

export default function Input({ placeholder = '' }: InputProps) {
  return (
    <input aria-label="contact-input" placeholder={placeholder} className="border px-3 py-2 rounded-md w-full md:w-64" />
  );
}
