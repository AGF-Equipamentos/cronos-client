import { Story, Meta } from '@storybook/react/types-6-0'
import Login from '.'

export default {
  title: 'Login',
  component: Login
} as Meta

const handleLogin = () => {}

export const Default: Story = () => <Login handleLogin={handleLogin} />
