import { fireEvent, render, screen } from '@testing-library/react'

import PoNew from '.'

const props = {
  handleCancel: () => null,
  handlStart: () => null
}

describe('<PoNew />', () => {
  it('should call handleCancel with process_id', () => {
    const handleCancel = jest.fn()
    render(<PoNew {...props} handleCancel={handleCancel} />)

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(handleCancel).toHaveBeenCalledWith('0001')
  })
})
