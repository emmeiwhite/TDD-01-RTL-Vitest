import { screen, render, logRoles } from '@testing-library/react'
import Sandbox from './Sandbox'

describe('05-form-testing', () => {
  test('form fields should intially be empty', () => {
    const { container } = render(<Sandbox />)
    logRoles(container)
    screen.debug()

    const emailInput = screen.getByRole('textbox', { name: /email/i })
    expect(emailInput).toHaveValue('')

    /* For passwords we do not have Roles, so we'll instead use .getByLabelText() */

    const passwordInput = screen.getByLabelText('Password')
    expect(passwordInput).toHaveValue('')

    const confirmPasswordInput = screen.getByLabelText(/confirm/i)
    expect(confirmPasswordInput).toHaveValue('')
  })
})
