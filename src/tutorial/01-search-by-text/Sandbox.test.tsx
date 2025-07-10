import { screen, render } from '@testing-library/react'
import { test, expect, describe } from 'vitest'
import Sandbox from './Sandbox'

describe('01 Search By Text', () => {
  test('test whether heading renders correctly', () => {
    render(<Sandbox />)

    const heading = screen.getByText('React Testing Library Examples')

    expect(heading).toBeInTheDocument()
  })

  test('test whether paragraph renders correctly', () => {
    render(<Sandbox />)

    const phoneRegex = /\d{3}-\d{3}-\d{4}/
    const phoneText = screen.getByText(phoneRegex)

    expect(phoneText).toBeInTheDocument()
  })

  /** queryByText: When the element is not intially rendered but conditionally rendered */

  test('test conditional element with queryByText()', () => {
    render(<Sandbox />)

    const errorMessage = screen.queryByText('Error Message')

    expect(errorMessage).not.toBeInTheDocument()
  })
})
