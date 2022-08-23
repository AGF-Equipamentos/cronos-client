import {
  Avatar,
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import Logo from 'components/Logo'
import { useSidebarDrawer } from 'contexts/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'

export type HeaderProps = {
  name: string
  department: string
}

const Header = ({ name, department }: HeaderProps) => {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    '2xl': true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo />

      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      ></Text>

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
