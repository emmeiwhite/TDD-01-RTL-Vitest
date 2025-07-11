import { useState } from 'react'
import validator from 'validator'

//✅ validator is perfect for simple form-level validation

// let's right away set some styles for the labels, inputs & button

const labelStyles = 'block text-gray-700 font-medium mb-2'
const inputStyles = 'block w-full rounded-md px-3 py-2 border-gray-300 border'
const buttonStyles =
  'block w-full rounded-md bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 '

const defaultState = {
  email: '',
  password: '',
  confirmPassword: ''
}
const Sandbox = () => {
  const [signupInputs, setSignupInputs] = useState(defaultState)
  const [error, setError] = useState('')

  /** handleChange(): 1 handler to handle them all */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    setSignupInputs({
      ...signupInputs,
      [id]: value
    })
  }

  /** handleSubmit(): 2 form Submit as before */
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    /** The validator package is a powerful tool to validate string-based data. 
        Popular methods:

        validator.isEmail(email)

        validator.isStrongPassword(password)

        validator.isLength(str, { min: 8 })

        validator.isAlphanumeric(str)

        validator.isMobilePhone(str, 'en-IN')
    */

    if (!validator.isEmail(signupInputs.email)) {
      return setError('Invalid Email')
    }

    if (!validator.isLength(signupInputs.password, { min: 5 })) {
      return setError('Password must be at least 5 characters')
    }

    if (signupInputs.password !== signupInputs.confirmPassword) {
      return setError('Passwords do not match')
    }

    // Everything is valid
    setError('')
    setSignupInputs(defaultState)
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-12 ">
      {/* Form */}
      <form className="space-y-4">
        {/* 1. Email */}
        <div className="">
          <label
            htmlFor="email"
            className={labelStyles}>
            Email Address
          </label>
          <input
            onChange={handleChange}
            value={signupInputs.email}
            className={inputStyles}
            type="text"
            name="email"
            id="email"
          />
        </div>

        {/* Password */}
        <div className="">
          <label
            htmlFor="password"
            className={labelStyles}>
            Password
          </label>
          <input
            onChange={handleChange}
            value={signupInputs.password}
            className={inputStyles}
            type="password"
            name="password"
            id="password"
          />
        </div>

        {/* Confirm Password */}
        <div className="">
          <label
            htmlFor="confirmPassword"
            className={labelStyles}>
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            value={signupInputs.confirmPassword}
            className={inputStyles}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit Button */}
        <button
          className={buttonStyles}
          onClick={handleSubmit}
          type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Sandbox
