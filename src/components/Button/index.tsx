import { Box, Button as ChakraButton } from '@chakra-ui/react'

export type ButtonProps = {
  name: string
  colorScheme?: string
}

const Button = ({ name, colorScheme }: ButtonProps) => {
  return (
    <Box>
      {colorScheme ? (
        <ChakraButton colorScheme={colorScheme}>{name}</ChakraButton>
      ) : (
        <ChakraButton colorScheme="yellow">{name}</ChakraButton>
      )}
    </Box>
  )
}

export default Button
