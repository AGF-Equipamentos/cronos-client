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
        title: 'Pedidos',
        link: '/orders',
        icon: RiDashboardLine
      },
      {
        title: 'Usuários',
        link: '/users',
        icon: RiContactsLine
      }
    ]
  },
  {
    section: 'COMPRAS',
    menus: [
      {
        title: 'Pedidos',
        link: '/orders',
        icon: RiInputMethodLine
      },
      {
        title: 'Usuários',
        link: '/users',
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
