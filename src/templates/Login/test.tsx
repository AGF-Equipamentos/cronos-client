import { render, screen } from '@testing-library/react'
import Login from '.'

describe('<Login/>', () => {
  it('should be possible to render the login', () => {
    render(<Login />)
  })
})
