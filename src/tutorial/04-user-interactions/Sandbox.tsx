import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
const Sandbox = () => {
  const [count, setCount] = useState(0)

  const [isLiked, setIsLiked] = useState(false)

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    setCount(count - 1)
  }

  function handleToggleLike() {
    setIsLiked(prev => !prev)
  }
  return (
    <div>
      {/* 1. Counter Code */}
      <div className="flex gap-8 mt-8">
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

      {/* 2. Like Interaction Code */}

      <div className=" mt-7 ml-28">
        {isLiked ? (
          <button
            className="text-3xl text-red-600"
            onClick={handleToggleLike}>
            {' '}
            <FaHeart />
          </button>
        ) : (
          <button
            className="text-3xl text-red-600"
            onClick={handleToggleLike}>
            {' '}
            <FaRegHeart />
          </button>
        )}
      </div>
    </div>
  )
}
export default Sandbox
