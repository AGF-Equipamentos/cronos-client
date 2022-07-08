import { fireEvent, render, screen } from '@testing-library/react'

import PoTable from '.'
import posMock from './mock'

describe('<PoTable />', () => {
  it('should render the PoCard', () => {
    render(<PoTable data={posMock} handleStart={() => true} />)

    expect(screen.getByText('00800SDE')).toBeInTheDocument()
    expect(screen.getByText(7)).toBeInTheDocument()
    expect(screen.getByText('AMORTECEDOR')).toBeInTheDocument()
    expect(screen.getByText('Pintar')).toBeInTheDocument()
    expect(screen.getByText('18/04 - 11:59h')).toBeInTheDocument()
    expect(screen.getByText('18/04 - 12:20h')).toBeInTheDocument()
  })

  it('should render the action play', () => {
    const handleStart = jest.fn()
    render(<PoTable data={posMock} handleStart={handleStart} />)

    fireEvent.click(screen.getAllByRole('button', { name: 'Retornar OP' })[2])
    fireEvent.click(screen.getByRole('button', { name: 'Retornar' }))

    expect(handleStart).toHaveBeenCalledWith('003')
  })
})
