import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options?: Option[];
  defaultValue?: string;
  style?: React.CSSProperties;
  className?: string;
  setSelectedValueProp?: (value: string) => void; // Updated this line
}

const Select: React.FC<SelectProps> = ({ label, options, defaultValue, style, className, setSelectedValueProp }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (setSelectedValueProp) {
      setSelectedValueProp(newValue); // Updated this line
    }
  };

  return (
    <div>
      {label && <label className="block mb-6 text-sm font-medium text-gray-600">{label}</label>}
      <select
        id="default"
        className={`bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500 ${className || ''}`}
        style={style}
        value={selectedValue}
        onChange={handleSelectChange}
      >
        {options?.length
          ? options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))
          : (
            <>
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </>
          )}
      </select>
    </div>
  );
};

export default Select;
