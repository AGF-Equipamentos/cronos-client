import { render, screen } from '@testing-library/react'

import Sidebar from '.'
import sidebarMock from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const asPath = '/orders'

useRouter.mockImplementation(() => ({
  asPath
}))

describe('<Sidebar />', () => {
  it('should render the route', () => {
    render(<Sidebar menuItems={sidebarMock} />)

    // expect(screen.getByRole('paragraph')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Pedidos' }).firstChild
    ).toHaveAttribute('class', expect.stringContaining('chakra-icon'))
    // expect(
    //   screen.getByRole('link', { name: 'Usuários' }).firstChild
    // ).toBeInTheDocument()
    // expect(
    //   screen.getByRole('link', { name: 'Aprovações' }).firstChild
    // ).toBeInTheDocument()
    // expect(
    //   screen.getByRole('link', { name: 'Solicitações' }).firstChild
    // ).toBeInTheDocument()
    // expect(
    //   screen.getByRole('link', { name: 'Pedidos' }).firstChild
    // ).toBeInTheDocument()
  })
})
