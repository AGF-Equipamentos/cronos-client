import { Story, Meta } from '@storybook/react/types-6-0'
import LoginCronos from '.'
import Login from '.'

export default {
  title: 'Login',
  component: Login
} as Meta

export const Default: Story = () => <LoginCronos />
