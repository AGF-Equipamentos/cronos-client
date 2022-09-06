const { efficiencyMock } = require('../Dashboard/mock')
import { screen } from '@testing-library/react'

import Dashboard from '.'

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    const filterEfficiency = Dashboard(efficiencyMock, 'day')
    expect(filterEfficiency).toStrictEqual([
      {
        day: 1,
        efficiency: 20
      },
      {
        day: 2,
        efficiency: 15
      },
      {
        day: 3,
        efficiency: 10
      },
      {
        day: 4,
        efficiency: 20
      },
      {
        day: 6,
        efficiency: 30
      },
      {
        day: 7,
        efficiency: 40
      },
      {
        day: 8,
        efficiency: 10
      },
      {
        day: 9,
        efficiency: 20
      },
      {
        day: 10,
        efficiency: 30
      },
      {
        day: 11,
        efficiency: 10
      },
      {
        day: 12,
        efficiency: 20
      },
      {
        day: 13,
        efficiency: 30
      },
      {
        day: 14,
        efficiency: 40
      },
      {
        day: 15,
        efficiency: 40
      },
      {
        day: 16,
        efficiency: 50
      }
    ])
  })
})

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    const filterEfficiency = Dashboard(efficiencyMock, 'week')
    expect(filterEfficiency).toStrictEqual([
      {
        week: 14,
        dtt_in_minutes: 27
      },
      {
        week: 18,
        dtt_in_minutes: 32
      },
      {
        week: 23,
        dtt_in_minutes: 53
      },
      {
        //week: 20+15+10+20+30+40
        week: 31,
        efficiency: 135
      },
      {
        //week: 10+20+30+10+20+30+40
        week: 32,
        efficiency: 160
      },
      {
        //week: 40 + 50
        week: 33,
        efficiency: 90
      }
    ])
  })
})

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    const filterEfficiency = Dashboard(efficiencyMock, 'month')
    expect(filterEfficiency).toStrictEqual([
      {
        month: 4,
        dtt_in_minutes: 27
      },
      {
        month: 5,
        dtt_in_minutes: 32
      },
      {
        month: 6,
        dtt_in_minutes: 53
      },
      {
        //month: 20+15+10+20+30+40+10+20+30+10+20+30+40+40+50
        month: 8,
        efficiency: 385
      },
      {
        month: 9,
        efficiency: 100
      },
      {
        month: 10,
        efficiency: 90
      }
    ])
  })
})

expect(screen.getByRole('heading', { name: /Dashboard/i })).toBeInTheDocument()
