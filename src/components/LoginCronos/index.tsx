import { Flex, Stack, Image, Button } from '@chakra-ui/react'
import { Input } from 'components/Input'
import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

type LoginProps = {
  handleLogin: (value: unknown) => void
}

export type LoginFormData = {
  nome: string
  registro: string
}

const schema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório'),
  registro: yup.number().required('Registro obrigatório')
})

const LoginCronos: React.FC<LoginProps> = ({ handleLogin }) => {
  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  })

  const SingIn: SubmitHandler<LoginFormData> = async (value) => {
    handleLogin(value)
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={['6', '8']}
        mx={['4', 'auto']}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Flex justifyContent="center" textAlign="center">
            <Image src="/img/Logo_2.png" />
          </Flex>

          <Input label="Nome" {...register('nome')} />
          <Input label="Registro" type="registro" {...register('registro')} />

          <Flex justify="center">
            <Button
              colorScheme="yellow"
              size="lg"
              w="296px"
              isLoading={formState.isSubmitting}
              onClick={handleSubmit(SingIn)}
            >
              Entrar
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default LoginCronos
