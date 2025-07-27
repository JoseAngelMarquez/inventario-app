import React, { useState } from 'react';
import InputField from './components/InputField';
import { Button, Box, Heading } from '@chakra-ui/react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario: ${username}\nPassword: ${password}`);
  };

  return (
    <Box maxW="400px" mx="auto" mt="100px" p="6" boxShadow="md" borderRadius="md">
      <Heading mb={6} textAlign="center">Login</Heading>
      <form onSubmit={handleSubmit}>
        <InputField 
          placeholder="Nombre de usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <InputField 
          placeholder="Contraseña" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button colorScheme="blue" type="submit" width="full" mt={4}>
          Entrar
        </Button>
      </form>
    </Box>
  );
}

export default App;
