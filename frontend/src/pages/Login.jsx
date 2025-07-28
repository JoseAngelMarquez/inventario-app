// src/pages/Login.jsx
import { Box, VStack, Heading } from "@chakra-ui/react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

function Login() {
  return (
    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center" bg="gray.50">
      <Box p={8} bg="white" borderRadius="md" boxShadow="md" w="sm">
        <VStack spacing={4}>
          <Heading size="lg">Iniciar Sesión</Heading>
          <CustomInput placeholder="Correo electrónico" />
          <CustomInput placeholder="Contraseña" type="password" />
          <CustomButton>Entrar</CustomButton>
        </VStack>
      </Box>
    </Box>
  );
}

export default Login;
