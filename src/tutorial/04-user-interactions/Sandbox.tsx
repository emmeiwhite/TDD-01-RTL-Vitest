import { useState } from 'react'
const Sandbox = () => {
  const [count, setCount] = useState(0)

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    setCount(count - 1)
  }
  return (
    <div>
      <div className="flex gap-5 mt-8">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded-sm"
          onClick={handleDecrease}>
          decrease
        </button>
        <h1 className="text-2xl font-bold">{count}</h1>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded-sm"
          onClick={handleIncrease}>
          increase
        </button>
      </div>
    </div>
  )
}
export default Sandbox
