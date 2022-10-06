import dashefficiencyday from 'components/Dashboard/mockDay'
import EfficiencyDash, { EfficiencyDashProps } from 'templates/EfficiencyDash'

export default function efficiencyPage({
  efficiencydash
}: EfficiencyDashProps) {
  return <EfficiencyDash efficiencydash={efficiencydash} />
}

export const getStaticProps = async () => {
  return {
    props: {
      efficiencydash: dashefficiencyday
    }
  }
}
