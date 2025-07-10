import { screen, render, logRoles } from '@testing-library/react'
import Sandbox from './Sandbox'

describe('04-user-interactions with userEvent', () => {
  test('counter button are present', () => {
    const { container } = render(<Sandbox />)

    logRoles(container)

    const decreaseBtn = screen.getByRole('button', { name: /decrease/i })
    const increaseBtn = screen.getByRole('button', { name: /increase/i })

    expect(decreaseBtn).toBeInTheDocument()
    expect(increaseBtn).toBeInTheDocument()
  })
})
