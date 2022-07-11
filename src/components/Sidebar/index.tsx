import { Stack } from '@chakra-ui/react'
import { NavLink } from '@chakra-ui/react'
import { NavSection } from '@chakra-ui/react'

export type SidebarProps = {
  menuItems: MenuItem[]
}

type MenuItem = {
  section: string
  menus: {
    title: string
    link: string
    icon: string
  }[]
}

const Sidebar = ({ menuItems }: SidebarProps) => {
  return (
    <Stack spacing="12" align="flex-start" >
      {menuItems.map((menuItem) => (
        <NavSection title={menuItem.section}>
        menuItem.menus.map((menu) => (
          <NavLink icon={menu.icon} href={menu.link}>
            {menu.title}
          </NavLink>
        </NavSection>
        ))
      )}
    </Stack>
  )
}

export default Sidebar
