import { screen, render, logRoles } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  // EventHandling | User Interactions
  test('should increment and decrement count using userEvent', async () => {
    render(<Sandbox />)
    const decreaseBtn = screen.getByRole('button', { name: /decrease/i })
    const increaseBtn = screen.getByRole('button', { name: /increase/i })

    const user = userEvent.setup()

    // Now simulating the user clicking on the decreaseBtn
    await user.click(decreaseBtn)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('-1')
    //  Again simulating the user clicking on the increaseBtn and we expect value to increase from -1 to 0
    await user.click(increaseBtn)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('0')
  })
})
