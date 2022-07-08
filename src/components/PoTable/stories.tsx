import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react/types-6-0'
import PoTable, { PoTableProps } from '.'
import posMock from './mock'

export default {
  title: 'PoTable',
  component: PoTable
} as Meta

export const Default: Story<PoTableProps> = (args) => (
  <Box borderRadius={8} bg="gray.800" p="8" maxWidth="1144px">
    <PoTable {...args} />
  </Box>
)

Default.args = {
  data: posMock
}
