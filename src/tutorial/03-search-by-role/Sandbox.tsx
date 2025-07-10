import { useEffect, useState } from 'react'

const Sandbox = () => {
  const [showAsyncBtn, setShowAsyncBtn] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowAsyncBtn(true)
    }, 500)
  }, [])

  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/About">About</a>
      </nav>

      {/* Headings */}
      <h1>Main Heading</h1>
      <h2>SubHeading</h2>

      <img
        src="example.jpg"
        alt="Example"
      />

      {/* Regular buttons */}
      <button>Click me</button>
      <button>Submit</button>
      <button>Cancel</button>

      {/* Conditional error button to demonstrate queryByRole */}
      {showError && <button>Error</button>}

      {/* Async button to demonstrate findByRole */}
      {showAsyncBtn && <button>Async Button</button>}
    </div>
  )
}
export default Sandbox
