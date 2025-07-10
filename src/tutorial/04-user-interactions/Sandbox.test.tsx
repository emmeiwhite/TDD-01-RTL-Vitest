import { screen, render, logRoles } from '@testing-library/react'
import Sandbox from './Sandbox'

describe('04-user-interactions with userEvent', () => {
  test('count is initially 0', () => {
    render(<Sandbox />)

    const heading1 = screen.getByRole('heading', { name: '0', level: 1 })

    expect(heading1).toHaveTextContent('0')
  })

  test('counter button are present', () => {
    const { container } = render(<Sandbox />)

    logRoles(container)

    const decreaseBtn = screen.getByRole('button', { name: /decrease/i })
    const increaseBtn = screen.getByRole('button', { name: /increase/i })

    expect(decreaseBtn).toBeInTheDocument()
    expect(increaseBtn).toBeInTheDocument()
  })
})
