import { Flex, Stack, Image, Button } from '@chakra-ui/react'
import { Input } from 'components/Input'
import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'contexts/AuthContext'

export type LoginFormData = {
  username: string
  password: string
}

const schema = yup.object().shape({
  username: yup.string().required('Nome obrigatório'),
  password: yup.number().required('Senha obrigatório')
})

const LoginCronos = () => {
  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  })

  const { signIn } = useAuth()

  const handleLogin: SubmitHandler<LoginFormData> = async (value) => {
    signIn(value)
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

          <Input label="Nome" {...register('username')} />
          <Input label="Password" type="password" {...register('password')} />

          <Flex justify="center">
            <Button
              colorScheme="yellow"
              size="lg"
              w="296px"
              isLoading={formState.isSubmitting}
              onClick={handleSubmit(handleLogin)}
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
