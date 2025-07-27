// src/components/LoginForm.jsx
import React, { useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import InputField from "./components/InputField";

const LoginForm = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido, ${username}`);
  };

  return (
    <Box
      maxW="sm"
      mx="auto"
      mt="10"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Login
      </Heading>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Escribe tu nombre"
        />

        <Button type="submit" colorScheme="teal" width="full">
          Ingresar
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
