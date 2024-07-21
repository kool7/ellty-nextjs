import React from "react";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, checked, onChange }: ICheckboxProps) => (
  <div className="flex items-center rounded-lg">
    <input
      type="checkbox"
      id={label}
      checked={checked}
      onChange={onChange}
      className={`w-5 h-5 cursor-pointer border rounded-xl accent-blue-500`}
    />
    <label htmlFor={label} className="ml-2 text-sm font-medium">
      {label}
    </label>
  </div>
);
