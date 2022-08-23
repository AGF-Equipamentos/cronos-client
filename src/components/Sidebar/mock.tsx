import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

const sidebarMock = [
  {
    section: 'GERAL',
    menus: [
      {
        title: 'Dashboard',
        link: '/efficiencydash',
        icon: RiDashboardLine
      },
      {
        title: 'Ordens Produção',
        link: '/productionorders',
        icon: RiContactsLine
      },
      {
        title: 'Nova OP',
        link: '/ponew',
        icon: RiContactsLine
      }
    ]
  },
  {
    section: 'COMPRAS',
    menus: [
      {
        title: 'Aprovações',
        link: '/approvals',
        icon: RiInputMethodLine
      },
      {
        title: 'Cancelamento',
        link: '/cancel',
        icon: RiGitMergeLine
      },
      {
        title: 'Solicitações',
        link: '/requests',
        icon: RiDashboardLine
      }
    ]
  }
]

export default sidebarMock
