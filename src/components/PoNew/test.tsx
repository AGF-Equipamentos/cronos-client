import { fireEvent, render, screen } from '@testing-library/react'

import PoNew from '.'

const props = {
  handleCancel: () => null,
  handlStart: () => null
}

describe('<PoNew />', () => {
  it('should call handleStart with process_id', () => {
    const handleStart = jest.fn()
    render(
      <PoNew {...props} part_number={'VIXMOT0011'} handleStart={handleStart} />
    )

    fireEvent.click(screen.getByRole('button', { name: 'Start' }))

    expect(handleStart).toHaveBeenCalledWith('0001')
  })
})
