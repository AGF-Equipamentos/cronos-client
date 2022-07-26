import { Box, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react'
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

export type SelectProps = {
  name: string
  label?: string
  items: {
    label: string
    value: number | string
  }[]
  error?: FieldError
} & ChakraSelectProps

const DropdownBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, label, error = null, items, ...rest },
  ref
) => (
  <Box>
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraSelect
        name={name}
        id={name}
        ref={ref}
        focusBorderColor="yellow.500"
        {...rest}
      >
        {items?.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </ChakraSelect>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  </Box>
)

export const Dropdown = forwardRef(DropdownBase)
