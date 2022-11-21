type EfficienctAverageByParam = {
  production_order: {
    qty: number
  }
  day: number
  week: number
  month: number
  efficiency: number
  rt_in_minutes: number
}

type AverageSum = {
  [byParamValue: string]: {
    efficiency: number
    count: number
    rtt_in_minutes: number
  }
}

const getEfficienctAverageByParam = (
  times: EfficienctAverageByParam[],
  byParam: 'day' | 'week' | 'month'
) => {
  const po_timeSumAndCount = times.reduce((acc, po_time) => {
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
  }, {} as AverageSum)

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
