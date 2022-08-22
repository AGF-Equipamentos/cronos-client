import { Box, Flex } from '@chakra-ui/react'
import Header from 'components/Header'
import { SidebarNav } from 'components/Sidebar/SidebarNav'

export type BaseProps = {
  children: React.ReactNode
  name: string
  department: string
}

const Base = ({ children, name, department }: BaseProps) => (
  <Flex direction="column" h="100vh">
    <Header name={name} department={department} />

    <Flex w="100%" my="8" maxWidth={1480} mx="auto" px="6">
      <SidebarNav />

      <Box flex="1" bg="gray.800" p={['6', '8']} borderRadius={8}>
        {children}
      </Box>
    </Flex>
  </Flex>
)

export default Base
