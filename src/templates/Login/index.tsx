import LoginCronos from 'components/LoginCronos'

export type LoginProps = {
  handleLogin: (value: unknown) => void
}

export default function Login({ handleLogin }: LoginProps) {
  return <LoginCronos handleLogin={handleLogin} />
}
