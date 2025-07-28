// src/components/CustomButton.jsx
import { Button } from "@chakra-ui/react";

function CustomButton({ children, ...rest }) {
  return (
    <Button colorScheme="blue" width="full" {...rest}>
      {children}
    </Button>
  );
}

export default CustomButton;
