import { Box } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react/types-6-0'
import PoCard, { PoCardProps } from '.'

export default {
  title: 'PoCard',
  component: PoCard
} as Meta

export const Default: Story<PoCardProps> = (args) => (
  <Box borderRadius={8} bg="gray.800" p="8" maxWidth="1144px">
    <PoCard {...args} />
  </Box>
)

Default.args = {
  part_number: 'VIXMOT0011',
  description: 'MOTOR ELETRICO TRIFASICO IP-55 75CV 8P',
  qty: 25,
  process: 'Usinagem',
  previousSeconds: 10000
}
