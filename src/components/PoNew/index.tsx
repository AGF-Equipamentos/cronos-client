import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'
import * as yup from 'yup'
import { Input } from '../Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import Router from 'next/router'
import { FiX, FiPlay } from 'react-icons/fi'
import { Dropdown } from 'components/Dropdown'
import { api } from 'services/api'

export type CreatePoNewFormData = {
  part_number: string
  qty: number
  department: string
  workstation: string
  process: string
}

export type PoNewProps = {
  handleStart: (formData: CreatePoNewFormData) => void
}

yup.setLocale({
  number: {
    positive: 'Somente quantidades positivas'
  }
})

const createPoNewFormSchema = yup.object().shape({
  part_number: yup.string().required('Codigo Obrigatório'),
  qty: yup
    .number()
    .positive()
    .integer()
    .required('Quantidade obrigatória')
    .typeError('Digite apenas números'),
  department: yup.number().required('Escolha um departamento'),
  workstation: yup.number().required('Escolha um posto de trabalho'),
  process: yup.number().required('Escolha um processo')
})

export default function PoNew() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CreatePoNewFormData>({
    resolver: yupResolver(createPoNewFormSchema)
  })

  const handleCreatePoNew: SubmitHandler<CreatePoNewFormData> = async (
    values
  ) => {
    const po = await api.post('po-times', {
      data: {
        datetime_start: new Date(),
        users_permissions_user: 1,
        process: values.process,
        department: values.department,
        workstation: values.workstation,
        production_order: 2
        //standart_time:
      }
    })

    Router.push('productionorders')
  }

  return (
    <Box as="form" onSubmit={handleSubmit(handleCreatePoNew)}>
      <Heading size="lg" fontWeight="normal">
        Nova OP
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Input
            label="Código"
            error={errors.part_number}
            {...register('part_number')}
          />
          <Input label="Quantidade" error={errors.qty} {...register('qty')} />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Dropdown
            placeholder="Selecione um departamento"
            label="Departamento"
            error={errors.department}
            items={[
              {
                label: 'Calderaria',
                value: 1
              },
              {
                label: 'Pintura',
                value: 2
              },
              {
                label: 'Usinagem',
                value: 3
              },
              {
                label: 'Furação',
                value: 4
              },
              {
                label: 'Montagem',
                value: 5
              }
            ]}
            {...register('department')}
          />
          <Dropdown
            placeholder="Selecione um posto de trabalho"
            label="Posto de trabalho"
            error={errors.workstation}
            items={[
              {
                label: 'Posto de trabalho 01',
                value: 1
              },
              {
                label: 'Posto de trabalho 02',
                value: 2
              },
              {
                label: 'Posto de trabalho 03',
                value: 3
              },
              {
                label: 'Posto de trabalho 04',
                value: 4
              },
              {
                label: 'Posto de trabalho 05',
                value: 5
              }
            ]}
            {...register('workstation')}
          />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
          <Box w="100%">
            <Dropdown
              placeholder="Selecione um processo"
              label="Processo"
              error={errors.process}
              items={[
                {
                  label: 'Pintura',
                  value: 1
                },
                {
                  label: 'Usinagem',
                  value: 2
                },
                {
                  label: 'Furação',
                  value: 3
                },
                {
                  label: 'Fundição',
                  value: 4
                },
                {
                  label: 'Montagem',
                  value: 5
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
            onClick={() => Router.back()}
            textColor="gray.800"
            leftIcon={<Icon as={FiX} fontSize="16" />}
          >
            Cancelar
          </Button>
          <Button
            textColor="gray.800"
            colorScheme="yellow"
            type="submit"
            leftIcon={<Icon as={FiPlay} fontSize="16" />}
            isLoading={isSubmitting}
            onClick={handleSubmit(handleCreatePoNew)}
          >
            Iniciar
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}
