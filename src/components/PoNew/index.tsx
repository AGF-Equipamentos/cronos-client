import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  SimpleGrid,
  VStack
} from '@chakra-ui/react'

export type PoNewProps = {
  part_number: string
  qty: number
  department: string
  workstation: string
  process: string
  handleCancel: () => void
  handleStart: () => void
}

const PoNew = ({
  part_number,
  qty,
  department,
  workstation,
  process,
  handleCancel,
  handleStart
}: PoNewProps) => {
  return (
    <Box>
      <Flex w="100%" my="6" maxWidth={800} mx="auto" px="6">
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleStart}
        >
          <Heading size="lg" fontWeight="normal">
            Nova OP
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Text>{part_number}</Text>
              <Input
                name="name"
                label="Nome completo"
                //error={errors.name}
                //{...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                //error={errors.email}
                //{...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                //error={errors.password}
                //{...register('password')}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                //error={errors.password_confirmation}
                //{...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/">
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" colorScheme="yellow">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default PoNew
