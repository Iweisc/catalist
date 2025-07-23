import React, { useState } from 'react';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label = '',
  error = '',
  required = false,
  className = ''
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  const baseClasses = 'w-full px-3 py-2 border rounded-lg text-gray-900 placeholder-gray-500 transition-colors duration-200';
  const focusClasses = 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
  const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300';

  const inputClasses = `
    ${baseClasses}
    ${focusClasses}
    ${errorClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="w-full">
      {label && (
        <label className="block text-base font-medium text-gray-700 mb-1" style={{ position: 'relative', fontFamily: 'Avenir', fontWeight: 500, lineHeight: '100%', right: label === 'Email' ? '162px' : '151px', top: '-3px' }}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required={required}
          className={inputClasses}
        />
        {type === 'password' && (
          <img
            src="/assets/eye.png"
            alt="Toggle visibility"
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
            style={{ width: '20px', height: '20px' }}
          />
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;