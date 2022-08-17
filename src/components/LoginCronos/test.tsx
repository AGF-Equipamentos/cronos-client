import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import Login from '.'

describe('<Login />', () => {
  it('should be possible to "Enter" ', async () => {
    const handleLogin = jest.fn()
    render(<Login handleLogin={handleLogin} />)

    const nomeInput = screen.getByLabelText('Nome')
    fireEvent.change(nomeInput, {
      target: { value: 'Ronaldo' }
    })

    const registroInput = screen.getByLabelText('Registro')
    fireEvent.change(registroInput, { target: { value: '407' } })

    const button = screen.getByText('Entrar')
    fireEvent.click(button)

    await waitFor(() => expect(handleLogin).toHaveBeenCalled())
  })
})
