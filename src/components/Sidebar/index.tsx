import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import { useSidebarDrawer } from 'contexts/SidebarDrawerContext'
import { IconType } from 'react-icons/lib'
import SidebarNav from './SidebarNav'

export type SidebarProps = {
  menuItems: MenuItem[]
}

export type MenuItem = {
  section: string
  menus: {
    title: string
    link: string
    icon: IconType
  }[]
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    '2xl': false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav menuItems={menuItems} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box w="64" mr="8">
      <SidebarNav menuItems={menuItems} />
    </Box>
  )
}

export default Sidebar
