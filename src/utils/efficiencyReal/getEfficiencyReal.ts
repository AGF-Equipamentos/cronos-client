type EfficiencyReal = {
  [byParam: string]: number
  efficiency: number
  rtt_in_minutes: number
}

type DownTime = {
  [byParam: string]: number
  dtt_in_minutes: number
}

const getEfficiencyReal = (
  times: EfficiencyReal[],
  dt: DownTime[],
  byParam: 'day' | 'week' | 'month'
) => {
  const efficiencyfind = times.map((efficiency) => {
    const dtFinded = dt.find(
      (dtItem) => dtItem[byParam] === efficiency[byParam]
    )

    if (dtFinded) {
      return {
        ...efficiency,
        real_efficiency:
          Math.round(
            (efficiency.efficiency +
              dtFinded.dtt_in_minutes / efficiency.rtt_in_minutes) *
              100
          ) / 100
      }
    } else {
      return {
        ...efficiency,
        real_efficiency: efficiency.efficiency
      }
    }
  })
  return efficiencyfind
}

export default getEfficiencyReal
