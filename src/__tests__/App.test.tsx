import { render, screen } from '@testing-library/react'
// Note: technically already available globally
import { test, expect } from 'vitest'
import App from '../App'

// Test if heading renders correctly
test('should render heading with correct text', () => {
  // Render the App component
  render(<App />)

  // Log the DOM tree for debugging
  screen.debug()

  // Find heading by its text content
  // const heading = screen.getByText('React Testing Library')

  // Verify heading exists in document
  expect(screen.getByText('React Testing Library')).toBeInTheDocument()
})

/** No Assertion --- tests will always pass */
test('empty test', () => {
  // Empty test will always pass, because we have no assertion to validate failure
})

test('this test will also pass', () => {
  const sum = 2 + 3
  console.log(sum)
})

test('this test will forcefully fail', () => {
  throw new Error('forcefully thrown an error')
})
