import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import PoCard from '.'

const props = {
  process_id: '0001',
  part_number: 'VIXMOT0011',
  description: 'MOTOR ELETRICO TRIFASICO IP-55 75CV 8P',
  qty: 25,
  process: 'Usinagem',
  handlePause: () => null,
  handleFinish: () => null
}

describe('<PoCard />', () => {
  it('should render the PoCard', () => {
    render(<PoCard {...props} />)

    expect(screen.getByText(/VIXMOT0011/i)).toBeInTheDocument()
    expect(
      screen.getByText(/MOTOR ELETRICO TRIFASICO IP-55 75CV 8P/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/25/i)).toBeInTheDocument()
    expect(screen.getByText(/usinagem:/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pausar' }))
    expect(screen.getByRole('button', { name: 'Finalizar' }))
  })

  it('should call handlePause with process_id', () => {
    const handlePause = jest.fn()
    render(<PoCard {...props} handlePause={handlePause} />)

    fireEvent.click(screen.getByRole('button', { name: 'Pausar' }))
    fireEvent.click(screen.getByRole('button', { name: 'Pausar' }))

    expect(handlePause).toHaveBeenCalledWith('0001')
  })

  it('should call handleFinish with process_id', () => {
    const handleFinish = jest.fn()
    render(<PoCard {...props} handleFinish={handleFinish} />)

    fireEvent.click(screen.getByRole('button', { name: 'Finalizar' }))
    fireEvent.click(screen.getByRole('button', { name: 'Finalizar' }))

    expect(handleFinish).toHaveBeenCalledWith('0001')
  })

  it('should render timer', () => {
    render(<PoCard {...props} />)

    expect(screen.getByText(/0:0:0/i)).toBeInTheDocument()
  })

  it('should render timer with interval', async () => {
    render(<PoCard {...props} previousSeconds={60} />)

    await waitFor(
      () => expect(screen.getByText(/0:01:02/i)).toBeInTheDocument(),
      {
        timeout: 3000,
        interval: 1000
      }
    )
  })

  it('should render timer with previousSeconds calculted properly', () => {
    render(<PoCard {...props} previousSeconds={10000} />)

    expect(screen.getByText(/02:46:40/i)).toBeInTheDocument()
  })
})
