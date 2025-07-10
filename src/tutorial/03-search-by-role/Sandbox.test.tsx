import { screen, render } from '@testing-library/react'
import Sandbox from './Sandbox'

describe('03. Search By Role', () => {
  test('renders nav and navigation links', () => {
    render(<Sandbox />)

    // 1. test navigation
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()

    //   2. test nav links one by one

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })
})
