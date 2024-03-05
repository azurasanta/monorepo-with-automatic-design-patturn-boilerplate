import React, { ChangeEvent } from 'react';

type TextInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

// Text Input Atom Component
export const TextInput = ({ label, placeholder, value, onChange }: TextInputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

type ButtonProps = {
  label: string;
  onClick: () => void;
};

// Button Atom Component
export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};