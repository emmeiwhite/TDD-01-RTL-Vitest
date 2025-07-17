import { useEffect, useState } from 'react'

const Sandbox = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    // simulate the API call with a delay of 500ms
    const timer = setTimeout(() => {
      setShowMessage(true)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // useEffect(() => {
  //   setShowError(true)
  // }, [])

  return (
    <div>
      {/* getByText() */}
      <h1>React Testing Library Examples</h1>
      <p>You can search me with regular expression: 123-456-7890</p>

      {/* queryByText() */}
      {showError && <p>Error Message</p>}

      <ul>
        <li> Item 1</li>
        <li> Item 1</li>
        <li> Item 1</li>
        <li> Item 1</li>
      </ul>

      {/* findByText() */}
      {showMessage && <p>Async Message</p>}
    </div>
  )
}
export default Sandbox
