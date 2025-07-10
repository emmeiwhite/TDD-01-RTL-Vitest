import { screen, render, logRoles } from '@testing-library/react'
import Sandbox from './Sandbox'

describe('03. Search By Role', () => {
  test('renders nav and navigation links', () => {
    const { container } = render(<Sandbox />)

    logRoles(container)
    // 1. test navigation
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()

    //   2. test nav links one by one

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  test('renders headings with correct hierarchy', () => {
    render(<Sandbox />)

    //   3. test heading which has role heading
    expect(screen.getByRole('heading', { name: 'Main Heading', level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'SubHeading', level: 2 })).toBeInTheDocument()
  })

  test('renders image with alt text', () => {
    render(<Sandbox />)

    //   4. img with alt (alt in jsDOM env is treated as name property)
    expect(screen.getByRole('img', { name: 'Example' })).toBeInTheDocument()
  })

  test('render initial buttons', () => {
    render(<Sandbox />)

    //  5. buttons
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  })
})
