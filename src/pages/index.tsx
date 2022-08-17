import Login, { LoginProps } from 'templates/Login'

export default function LoginPage({ handleLogin }: LoginProps) {
  return <Login handleLogin={handleLogin} />
}
