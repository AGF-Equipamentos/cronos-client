import { render, screen } from '@testing-library/react'

import PoHeader from '.'

const props = {
  name: 'Ronaldo',
  department: 'Usinagem'
}

describe('<PoHeader />', () => {
  it('should render the heading', () => {
    render(<PoHeader {...props} />)

    expect(screen.getByText(/Ronaldo/i)).toBeInTheDocument()
    expect(screen.getByText(/Usinagem/i)).toBeInTheDocument()
  })
})
