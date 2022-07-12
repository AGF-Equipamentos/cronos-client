import { render, screen } from '@testing-library/react'

import PoNew from '.'

describe('<PoNew />', () => {
  it('should render the heading', () => {
    const { container } = render(<PoNew />)

    expect(screen.getByRole('heading', { name: /PoNew/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
