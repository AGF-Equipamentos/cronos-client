import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import * as yup from 'yup'
import { Input } from '../Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FiX, FiPlay } from 'react-icons/fi'
import { Dropdown } from 'components/Dropdown'

export type PoNewProps = {
  codigo: string
  handleCancel: (codigo: string) => void
  handleStart: (codigo: string) => void
}

const createPoNewFormSchema = yup.object().shape({
  codigo: yup.string().required('Codigo Obrigatório'),
  qty: yup.number()
})

export default function PoNew({ codigo, handleStart }: PoNewProps) {
  const {
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(createPoNewFormSchema)
  })

  const { onOpen: onCancelOpen } = useDisclosure()

  return (
    <Box>
      <Flex w="100%" my="6" maxWidth={800} mx="auto" px="6">
        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
          <Heading size="lg" fontWeight="normal">
            Nova OP
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                label="Código"
                error={errors.codigo}
                {...register('codigo')}
              />
              <Input
                label="Quatidade"
                error={errors.qty}
                {...register('qty')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Dropdown
                placeholder="Selecione um departamento"
                label="Departamento"
                items={[
                  {
                    label: 'Pintura',
                    value: 'Pintura'
                  },
                  {
                    label: 'Usinagem',
                    value: 'Usinagem'
                  },
                  {
                    label: 'Furação',
                    value: 'Furação'
                  },
                  {
                    label: 'Fundição',
                    value: 'Fundição'
                  },
                  {
                    label: 'Montagem',
                    value: 'Montagem'
                  }
                ]}
                {...register('department')}
              />
              <Dropdown
                placeholder="Selecione um posto de trabalho"
                label="Posto de trabalho"
                items={[
                  {
                    label: 'Posto de trabalho 01',
                    value: 'Posto de trabalho 01'
                  },
                  {
                    label: 'Posto de trabalho 02',
                    value: 'Posto de trabalho 02'
                  },
                  {
                    label: 'Posto de trabalho 03',
                    value: 'Posto de trabalho 03'
                  },
                  {
                    label: 'Posto de trabalho 04',
                    value: 'Posto de trabalho 04'
                  },
                  {
                    label: 'Posto de trabalho 05',
                    value: 'Posto de trabalho 05'
                  }
                ]}
                {...register('workstation')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Box w="50%">
                <Dropdown
                  placeholder="Selecione um processo"
                  label="Processo"
                  items={[
                    {
                      label: 'Pintura',
                      value: 'Pintura'
                    },
                    {
                      label: 'Usinagem',
                      value: 'Usinagem'
                    },
                    {
                      label: 'Furação',
                      value: 'Furação'
                    },
                    {
                      label: 'Fundição',
                      value: 'Fundição'
                    },
                    {
                      label: 'Montagem',
                      value: 'Montagem'
                    }
                  ]}
                  {...register('process')}
                />
              </Box>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button
                onClick={onCancelOpen}
                textColor="gray.800"
                leftIcon={<Icon as={FiX} fontSize="16" />}
              >
                Cancelar
              </Button>
              <Button
                onClick={() => handleStart(codigo)}
                textColor="gray.800"
                colorScheme="yellow"
                leftIcon={<Icon as={FiPlay} fontSize="16" />}
              >
                Iniciar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
