import dashefficiency from 'components/Dashboard/mock'
import EfficiencyDash, { EfficiencyDashProps } from 'templates/EfficiencyDash'

export default function efficiencyPage({
  efficiencydash
}: EfficiencyDashProps) {
  return <EfficiencyDash efficiencydash={efficiencydash} />
}

export const getStationProps = async () => {
  return {
    dashefficiency: dashefficiency
  }
}
