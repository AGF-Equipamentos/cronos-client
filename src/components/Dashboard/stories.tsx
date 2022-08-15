import { Story, Meta } from '@storybook/react/types-6-0'
import Dashboard, { DashboardProps } from '.'
import efficiencyMock from './mock'

export default {
  title: 'Dashboard',
  component: Dashboard
} as Meta

export const Default: Story<DashboardProps> = (args) => <Dashboard {...args} />

Default.args = {
  data: efficiencyMock,
  category: 'day',
  measure: 'efficiency',
  measureTitle: 'Eficiencia'
}
