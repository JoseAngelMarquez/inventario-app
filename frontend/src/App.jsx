import { Button, ButtonGroup } from "@chakra-ui/react"

function App() {
  return (
    <>
      <Button colorScheme="blue">Click me</Button>

      <ButtonGroup spacing="6" mt="4">
        <Button colorScheme="teal">Save</Button>
        <Button colorScheme="red">Cancel</Button>
      </ButtonGroup>
    </>
  )
}

export default App
