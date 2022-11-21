import getWeek from 'date-fns/getWeek'

type DownTime = {
  id: number
  datetime_start: Date
  datetime_end: Date
}

const getDownTime = (dt_times: DownTime[]) => {
  const dt_timesDownTime = dt_times.map((dt_time) => ({
    ...dt_time,
    dt_in_minutes:
      (Number(new Date(dt_time.datetime_end)) -
        Number(new Date(dt_time.datetime_start))) /
      (1000 * 60),
    day: new Date(dt_time.datetime_end).getDate(),
    week: getWeek(new Date(dt_time.datetime_end)),
    month: new Date(dt_time.datetime_end).getMonth() + 1
  }))

  return dt_timesDownTime
}

export default getDownTime
