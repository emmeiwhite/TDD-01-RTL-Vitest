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

  const handleChange = e => {}

  /** handleSubmit(): 2 form Submit as before */
  const handleSubmit = e => {
    e.preventDefaut()
  }
  return (
    <div className="max-w-md mx-auto px-6 bg-white rounded-lg shadow-md mt-12 ">
      {/* Form */}
      <form className="space-y-4">
        <div className="">
          <label htmlFor="">Email Adress</label>
        </div>
        <div className="">
          <label htmlFor="">Password</label>
        </div>
        <div className="">
          <label htmlFor="">Confirm Password</label>
        </div>
      </form>
    </div>
  )
}
export default Sandbox
