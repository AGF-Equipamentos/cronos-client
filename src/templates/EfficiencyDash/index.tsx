import Base from 'templates/Base'
import Dashboard, { DashboardProps } from 'components/Dashboard'
import efficiencyMockDay from 'components/Dashboard/mockDay'
import efficiencyMockMonth from 'components/Dashboard/mockMonth'
import efficiencyMockWeek from 'components/Dashboard/mockWeek'

export type EfficiencyDashProps = {
  efficiencydash: DashboardProps[]
}

export default function EfficiencyDash({
  efficiencydash
}: EfficiencyDashProps) {
  return (
    <Base name="Ronaldo" department="Usinagem">
      <Dashboard
        data={efficiencyMockDay}
        category="day"
        measure="efficiency"
        measureTitle="Produtividade Diaria"
      />
      <Dashboard
        data={efficiencyMockWeek}
        category="week"
        measure="efficiency"
        measureTitle="Produtividade Semanal"
      />
      <Dashboard
        data={efficiencyMockMonth}
        category="month"
        measure="efficiency"
        measureTitle="Produtividade Mensal"
      />
    </Base>
  )
}
