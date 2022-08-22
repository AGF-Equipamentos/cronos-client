import { Box, Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import { IconType } from 'react-icons/lib'

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
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        {menuItems.map((menuItem) => (
          <NavSection title={menuItem.section} key={menuItem.section}>
            {menuItem.menus.map((menu) => (
              <NavLink
                _houver={{ color: 'yellow.400' }}
                key={menu.link}
                icon={menu.icon}
                href={menu.link}
              >
                {menu.title}
              </NavLink>
            ))}
          </NavSection>
        ))}
      </Stack>
    </Box>
  )
}

export default Sidebar
