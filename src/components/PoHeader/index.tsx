import { Box, Flex, Heading } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationsNav'

const PoHeader = () => {
  return (
    <Box bg="gray.800" p="6">
      <Heading size="lg" fontWeight="normal">
        <Logo />

        <SearchBox />

        <Flex align="center" ml="auto">
          <NotificationsNav />
          <Profile showProfileData />
        </Flex>
      </Heading>
    </Box>
  )
}

export default PoHeader
