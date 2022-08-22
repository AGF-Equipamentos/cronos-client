import Base from 'templates/Base'
import Dashboard, { DashboardProps } from 'components/Dashboard'
import efficiencyMock from 'components/Dashboard/mock'

export type EfficiencyDashProps = {
  efficiencydash: DashboardProps[]
}

export default function EfficiencyDash({
  efficiencydash
}: EfficiencyDashProps) {
  return (
    <Base name="Ronaldo" department="Usinagem">
      <Dashboard
        data={efficiencydash}
        category="day"
        measure="Production"
        measureTitle="Produtividade"
      />
    </Base>
  )
}
