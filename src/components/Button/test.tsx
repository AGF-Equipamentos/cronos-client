import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    render(<Button name="Clique aqui" />)

    // get => achar alguma coisa, mas somente 1
    // query => não quer achar alguma coisa
    // find => achar alguma coisa, só que assincrono => await find

    expect(
      screen.getByRole('button', { name: 'Clique aqui' })
    ).toBeInTheDocument()
  })

  it('should render the colorScheme', () => {
    render(<Button name="Clique aqui" colorScheme="blue" />)

    // get => achar alguma coisa, mas somente 1
    // query => não quer achar alguma coisa
    // find => achar alguma coisa, só que assincrono => await find
  })
})
