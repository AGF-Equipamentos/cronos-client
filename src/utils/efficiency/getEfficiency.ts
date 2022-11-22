import getWeek from 'date-fns/getWeek'

type Efficiency = {
  id: number
  datetime_start: Date
  datetime_end: Date
  production_order: {
    id: number
    part_number: string
    qty: number
    obs: string
    createdAt: string
    updatedAt: string
  }
  standart_time: {
    id: number
    part_number: string
    time_in_minutes: number
    createdAt: string
    updatedAt: string
  }
}

const getEfficiency = (po_times: Efficiency[]) => {
  const po_timesEfficiency = po_times.map((po_time) => ({
    ...po_time,
    // time_in_minutes / ((datetime_end - datetime_start) / qty) average time by piece
    rt_in_minutes:
      (Number(new Date(po_time.datetime_end)) -
        Number(new Date(po_time.datetime_start))) /
      (1000 * 60),
    efficiency:
      po_time.standart_time.time_in_minutes /
      ((Number(new Date(po_time.datetime_end)) -
        Number(new Date(po_time.datetime_start))) /
        (1000 * 60) /
        po_time.production_order.qty),
    day: new Date(po_time.datetime_end).getDate(),
    week: getWeek(new Date(po_time.datetime_end)),
    month: new Date(po_time.datetime_end).getMonth() + 1
  }))
  return po_timesEfficiency
}

export default getEfficiency
