import {
  Avatar,
  Box,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import Logo from 'components/Logo'
import { useSidebarDrawer } from 'contexts/SidebarDrawerContext'
import { RiMenuLine, RiShutDownLine } from 'react-icons/ri'

export type HeaderProps = {
  name: string
  department: string
  handleLogout: () => true
}

const Header = ({ name, department, handleLogout }: HeaderProps) => {
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

          <Menu placement="bottom-end">
            <MenuButton>
              <Avatar size="md" name={name} src="" />
            </MenuButton>
            <MenuList bg="gray.700" borderColor="gray.600">
              <MenuItem
                icon={<RiShutDownLine />}
                _focus={{ background: 'gray.700', color: 'red.300' }}
                _active={{ background: 'gray.700', color: 'red.500' }}
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
