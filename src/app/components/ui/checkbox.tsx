import React from "react";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, checked, onChange }: ICheckboxProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <div
          className={`
          w-6 h-6 border rounded-md ${
            checked
              ? "bg-blue-500 border-none hover:bg-blue-600 active:ring-2 active:ring-blue-300"
              : "bg-white border-zinc-300"
          }
          transition-colors duration-100 ease-in-out flex items-center justify-center active:ring-2 active:ring-blue-100
        `}
        >
          {checked && (
            <svg
              className="w-5 h-5 text-white stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M20 6L9 17L4 12" />
            </svg>
          )}
        </div>
      </div>
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
};
