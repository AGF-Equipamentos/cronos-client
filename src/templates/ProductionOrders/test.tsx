import { render, screen } from '@testing-library/react'
import React from 'react'
import ProductionOrders from '.'

jest.mock('templates/Base', () => ({
  _esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/PoTable', () => {
  return {
    _esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PoTable"></div>
    }
  }
})

const productionOrders = [
  {
    process_id: '001',
    part_number: 'VIXMOT0011',
    quantity: 6,
    description: 'MOTOR ELETRICO TRIFASICO IP-55 75CV 8P',
    process: 'Usinagem',
    begin: '2022-04-12T16:37:45.333Z',
    end: '2022-04-12T16:37:45.333Z'
  }
]

describe('ProductionOrders />', () => {
  it('should be possible to render the "Table"', () => {
    render(<ProductionOrders productionOrders={productionOrders} />)

    expect(screen.getByTestId('')).toBeInTheDocument()
  })
})
