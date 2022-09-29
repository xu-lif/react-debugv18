import { useState, useEffect } from "react"

const Test = () => {
  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    setCount(1)
  }

  useEffect(() => {
    console.log('执行create111')
    return () => {
      console.log('执行destroy111')
    }
  }, [])
  useEffect(() => {
    console.log('执行create222')
    return () => {
      console.log('执行destroy222')
    }
  }, [])
  useEffect(() => {
    console.log('执行create333')
    return () => {
      console.log('执行destroy333')
    }
  }, [])

  console.log('render ---- x')
  return (
    <div>
      <div>
        <button onClick={handleBtnClick}>
          {count}
        </button>
      </div>
    </div>
  )
}

export default Test