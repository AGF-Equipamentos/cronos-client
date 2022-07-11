import { Story, Meta } from '@storybook/react/types-6-0'
import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Default: Story<HeaderProps> = () => (
  <Header name="Ronaldo" department="Usinagem" />
)
