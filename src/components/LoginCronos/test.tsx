import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AuthContext, AuthContextData } from 'contexts/AuthContext'
import LoginForm from '.'

describe('<LoginForm />', () => {
  it('should be to login the "username", "password"', async () => {
    const signIn = jest.fn()

    render(
      <AuthContext.Provider value={{ ...({} as AuthContextData), signIn }}>
        <LoginForm />
      </AuthContext.Provider>
    )
    //Input user
    const userameInput = screen.getByLabelText('Usuário')
    fireEvent.change(userameInput, {
      target: { value: 'ronaldo' }
    })

    //Input password
    const passwordInput = screen.getByLabelText('Senha')
    fireEvent.change(passwordInput, { target: { value: '123456' } })

    // Button
    const button = screen.getByText('Entrar')
    fireEvent.click(button)

    await waitFor(() =>
      expect(signIn).toHaveBeenCalledWith({
        username: 'ronaldo',
        password: '123456'
      })
    )
  })
})
