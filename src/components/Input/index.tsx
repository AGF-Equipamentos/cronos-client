import { Box, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react'
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

export type InputProps = {
  name: string
  label?: string
  error?: FieldError
} & ChakraInputProps

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => (
  <Box>
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="yellow.500"
        ref={ref}
        {...rest}
      />
      {console.log(error)}

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  </Box>
)

export const Input = forwardRef(InputBase)
