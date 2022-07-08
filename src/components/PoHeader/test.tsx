import { render, screen } from '@testing-library/react'

import PoHeader from '.'

describe('<PoHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<PoHeader />)

    expect(screen.getByRole('heading', { name: /PoHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
