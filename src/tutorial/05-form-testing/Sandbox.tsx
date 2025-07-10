import { useState } from 'react'
import validator from 'validator'

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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-12 ">
      {/* Form */}
      <form
        className="space-y-4"
        onSubmit={handleSubmit}>
        {/* 1. Email */}
        <div className="">
          <label
            htmlFor="email"
            className={labelStyles}>
            Email Adress
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
            type="text"
            name="password"
            id="password"
          />
        </div>

        {/* Confirm Password */}
        <div className="confirm-password">
          <label
            htmlFor=""
            className={labelStyles}>
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            value={signupInputs.confirmPassword}
            className={inputStyles}
            type="text"
            name="confirm-password"
            id="confirm-password"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit Button */}
        <button className={buttonStyles}>Submit</button>
      </form>
    </div>
  )
}
export default Sandbox
