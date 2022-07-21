import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react/types-6-0'
import PoNew, { PoNewProps } from '.'

export default {
  title: 'PoNew',
  component: PoNew
} as Meta

export const Default: Story<PoNewProps> = (args) => (
  <Box>
    <PoNew {...args} />
  </Box>
)

Default.args = {
  codigo: 'VIXMOT0011'
}
