import { screen, render, logRoles } from '@testing-library/react'
import { test, expect, describe } from 'vitest'
import Sandbox from './Sandbox'

// describe('01 Search By Text', () => {
//   test('test whether heading renders correctly', () => {
//     render(<Sandbox />)

//     const heading = screen.getByText('React Testing Library Examples')

//     expect(heading).toBeInTheDocument()
//   })

//   test('test whether paragraph renders correctly', () => {
//     render(<Sandbox />)

//     const phoneRegex = /\d{3}-\d{3}-\d{4}/
//     const phoneText = screen.getByText(phoneRegex)

//     expect(phoneText).toBeInTheDocument()
//   })

//   /** queryByText: When the element is not intially rendered but conditionally rendered */

//   test('test conditional element with queryByText()', () => {
//     render(<Sandbox />)

//     const errorMessage = screen.queryByText('Error Message')

//     expect(errorMessage).not.toBeInTheDocument()
//   })

//   /** Demonstrate different queryMethods and matchers */

//   test('demonstrate various queryMethods and matchers',async () => {
//     render(<Sandbox />)

//     const items = screen.getAllByText('Item 1')
//     expect(items).toHaveLength(4)

//     /** Async Text loaded after some time  */

//     const asyncMessage = await screen.findByText('Async Message')

//     expect(asyncMessage).toBeInTheDocument()
//   })
// })

describe('01-search-by-text', () => {
  /** 1. getByText(): Element should exist on initial render. Throws error if element is not present */
  test('Test heading text', () => {
    render(<Sandbox />)

    const headingText = screen.getByText(/Testing Library/i)

    expect(headingText).toBeInTheDocument()
  })

  test('Test whether paragraph renders correctly', () => {
    render(<Sandbox />)

    screen.debug() // logs the current state of the virtual-dom to the console

    const paragraphText = screen.getByText(/\d{3}-\d{3}-\d{4}/)

    expect(paragraphText).toBeInTheDocument()
  })

  /**  2) queryByText(): For conditional renders, where the element is initially not renderd but after a state change renders.  */

  test('Test conditional rendering of para', () => {
    render(<Sandbox />)

    const paraText = screen.queryByText('/error message/i')

    expect(paraText).not.toBeInTheDocument()
  })

  /** 3) Asynchronously rendered elements */

  test('test asynchronously renderd text', async () => {
    render(<Sandbox />)

    const asyncText = await screen.findByText(/async message/i)

    expect(asyncText).toBeInTheDocument()
  })
})
