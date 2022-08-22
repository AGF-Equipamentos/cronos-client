import { Stack } from '@chakra-ui/react'
import { FiClipboard, FiFilePlus, FiPieChart } from 'react-icons/fi'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={FiPieChart} href="/efficiencydash">
          Dashboard
        </NavLink>
        <NavLink icon={FiClipboard} href="/productionorders">
          Ordem de Produção
        </NavLink>
        <NavLink icon={FiFilePlus} href="/ponew">
          Nova OP
        </NavLink>
      </NavSection>
    </Stack>
  )
}
