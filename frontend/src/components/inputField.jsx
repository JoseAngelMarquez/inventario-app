import React from 'react';
import { Input } from '@chakra-ui/react';

const InputField = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <Input 
      placeholder={placeholder} 
      type={type} 
      value={value} 
      onChange={onChange} 
      mb={4}
    />
  );
};

export default InputField;
