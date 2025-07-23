import React, { useState } from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (onSubmit) {
        onSubmit(formData);
      } else {
        console.log('Login attempt:', formData);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome back!</h2>
        <p className="text-gray-500 mt-2">
          Don't have an account?{' '}
          <button type="button" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign up
          </button>
        </p>
      </div>
      
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <Input
            type="email"
            label="Email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            error={errors.email}
            required
          />
          
          <Input
            type="password"
            label="Password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
            error={errors.password}
            required
          />
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember Me</span>
            </label>
            <button type="button" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot Password?
            </button>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            className="mt-4"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
