import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import PoNew from '.'

jest.mock('next/router', () => ({
  useRouter: {
    back: jest.fn()
  }
}))

describe('<PoNew />', () => {
  it('should goback to previulisy page', async () => {
    // const spyRouter = jest.spyOn(require('next/router').useRouter, 'back')
    render(<PoNew handleStart={() => true} />)

    fireEvent.click(screen.getByRole('button', { name: 'Cancelar' }))

    // await waitFor(() => expect(spyRouter).toHaveBeenCalled())
  })

  it('should check if the option was selected', async () => {
    const handleStart = jest.fn()
    render(<PoNew handleStart={handleStart} />)

    // Código
    fireEvent.change(
      screen.getByRole('textbox', {
        name: 'Código'
      }),
      { target: { value: 'VIXMOT0011' } }
    )

    // Quantidade
    fireEvent.change(
      screen.getByRole('textbox', {
        name: 'Quantidade'
      }),
      { target: { value: 3 } }
    )

    // Department
    fireEvent.change(screen.getByRole('combobox', { name: 'Departamento' }), {
      target: { value: 'Usinagem' }
    })

    // Posto de trabalho
    fireEvent.change(
      screen.getByRole('combobox', { name: 'Posto de trabalho' }),
      { target: { value: 'Posto de trabalho 01' } }
    )

    // Processo
    fireEvent.change(screen.getByRole('combobox', { name: 'Processo' }), {
      target: { value: 'Usinagem' }
    })

    fireEvent.click(screen.getByRole('button', { name: 'Iniciar' }))

    await waitFor(() =>
      expect(handleStart).toHaveBeenCalledWith({
        part_number: 'VIXMOT0011',
        qty: 3,
        department: 'Usinagem',
        workstation: 'Posto de trabalho 01',
        process: 'Usinagem'
      })
    )
  })
})
