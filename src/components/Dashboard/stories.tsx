import efficiencyMockDay from './mockDay'
import efficiencyMockWeek from './mockWeek'
import efficiencyMockMonth from './mockMonth'
import { Story, Meta } from '@storybook/react/types-6-0'
import Dashboard, { DashboardProps } from '.'

export default {
  title: 'Dashboard',
  component: Dashboard
} as Meta

export const Day: Story<DashboardProps> = (args) => <Dashboard {...args} />

Day.args = {
  data: efficiencyMockDay,
  category: 'day',
  measure: 'efficiency',
  measureTitle: 'Eficiencia'
}

export const Week: Story<DashboardProps> = (args) => <Dashboard {...args} />

Week.args = {
  data: efficiencyMockWeek,
  category: 'week',
  measure: 'efficiency',
  measureTitle: 'Eficiencia'
}

export const Month: Story<DashboardProps> = (args) => <Dashboard {...args} />

Month.args = {
  data: efficiencyMockMonth,
  category: 'month',
  measure: 'efficiency',
  measureTitle: 'Eficiencia'
}
