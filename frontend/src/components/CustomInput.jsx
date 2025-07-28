// src/components/CustomInput.jsx
import { Input } from "@chakra-ui/react";

function CustomInput({ placeholder, type = "text", ...rest }) {
  return (
    <Input placeholder={placeholder} type={type} {...rest} />
  );
}

export default CustomInput;
