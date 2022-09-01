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
        week: 31,
        efficiency: 20
      },
      {
        week: 31,
        efficiency: 15
      },
      {
        week: 31,
        efficiency: 10
      },
      {
        week: 31,
        efficiency: 20
      },
      {
        week: 31,
        efficiency: 30
      },
      {
        week: 31,
        efficiency: 40
      },
      {
        week: 32,
        efficiency: 10
      },
      {
        week: 32,
        efficiency: 20
      },
      {
        week: 32,
        efficiency: 30
      },
      {
        week: 32,
        efficiency: 10
      },
      {
        week: 32,
        efficiency: 20
      },
      {
        week: 32,
        efficiency: 30
      },
      {
        week: 32,
        efficiency: 40
      },
      {
        week: 33,
        efficiency: 40
      },
      {
        week: 33,
        efficiency: 50
      }
    ])
  })
})

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    const filterEfficiency = Dashboard(efficiencyMock, 'month')

    expect(filterEfficiency).toStrictEqual([
      {
        month: 8,
        efficiency: 20
      },
      {
        month: 8,
        efficiency: 15
      },
      {
        month: 8,
        efficiency: 10
      },
      {
        month: 8,
        efficiency: 20
      },
      {
        month: 8,
        efficiency: 30
      },
      {
        month: 8,
        efficiency: 40
      },
      {
        month: 8,
        efficiency: 10
      },
      {
        month: 8,
        efficiency: 20
      },
      {
        month: 8,
        efficiency: 30
      },
      {
        month: 8,
        efficiency: 10
      },
      {
        month: 8,
        efficiency: 20
      },
      {
        month: 8,
        efficiency: 30
      },
      {
        month: 8,
        efficiency: 40
      },
      {
        month: 8,
        efficiency: 40
      },
      {
        month: 8,
        efficiency: 50
      }
    ])
  })
})

expect(screen.getByRole('heading', { name: /Dashboard/i })).toBeInTheDocument()
