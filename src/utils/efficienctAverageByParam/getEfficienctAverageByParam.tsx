export type efficiencyAverage = {
  times: string | any
  byParam: any
}

type po_timeSum = {
  acc: any
  po_time: any
}

const getEfficienctAverageByParam = ({ times, byParam }: efficiencyAverage) => {
  const po_timeSumAndCount = times.reduce(({ acc, po_time }: po_timeSum) => {
    if (!acc[po_time[byParam]]) {
      acc[po_time[byParam]] = {
        efficiency: po_time.efficiency * po_time.production_order.qty,
        count: po_time.production_order.qty,
        rtt_in_minutes: po_time.rt_in_minutes
      }
      return acc
    }
    acc[po_time[byParam]].efficiency =
      acc[po_time[byParam]].efficiency +
      po_time.efficiency * po_time.production_order.qty
    acc[po_time[byParam]].count =
      acc[po_time[byParam]].count + po_time.production_order.qty
    acc[po_time[byParam]].rtt_in_minutes =
      acc[po_time[byParam]].rtt_in_minutes + po_time.rt_in_minutes
    return acc
  }, {})

  const po_timeAvg = Object.keys(po_timeSumAndCount).map((param) => {
    const item = po_timeSumAndCount[param]
    return {
      [byParam]: Number(param),
      efficiency: Math.round((item.efficiency / item.count) * 100) / 100,
      rtt_in_minutes: Math.round(item.rtt_in_minutes)
    }
  })

  return po_timeAvg
}

export default getEfficienctAverageByParam
