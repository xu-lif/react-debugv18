import { useEffect, useState } from "react"

const Test = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(1)
  })

  console.log('render ---- x')
  return (
    <div>
      <div>
        {
          count
        }
      </div>
    </div>
  )
}

export default Test