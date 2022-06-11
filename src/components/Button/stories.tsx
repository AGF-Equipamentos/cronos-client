import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <Box maxWidth="1080px">
    <Button {...args} />
  </Box>
)

Default.args = {
  name: 'Clique'
}
