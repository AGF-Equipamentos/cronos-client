import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export type HeaderProps = {
  name: string
  department: string
}

const Header = ({ name, department }: HeaderProps) => {
  return (
    <Flex bg="gray.800" maxWidth={1144} h="20" p="6" align="center">
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        Cronos
      </Text>

      <Flex align="center" ml="auto">
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>{name}</Text>
            <Text color="gray.300" fontSize="small">
              {department}
            </Text>
          </Box>

          <Avatar size="md" name={name} src="" />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
