/** TDD: Write test first, fail it, then write code to pass the test */

import { screen, render } from '@testing-library/react'
import Sandbox from './Sandbox'

describe('02. TDD in action', () => {
  test('should render heading', () => {
    render(<Sandbox />)

    const heading = screen.getByText(/testing/i)
    expect(heading).toBeInTheDocument()
  })
})
