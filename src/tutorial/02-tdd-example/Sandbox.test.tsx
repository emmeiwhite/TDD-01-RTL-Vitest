/** TDD: Write test first, fail it, then write code to pass the test */

import { screen, render } from '@testing-library/react'
import Sandbox from './Sandbox'

test('02. TDD in action', () => {
  render(<Sandbox />)

  screen.getByText(/testing/i)
})
