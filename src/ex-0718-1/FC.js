import { useState, useEffect, useRef } from 'react'

// const initState = () => {
//   console.log('FC - 模擬 constructor')
//   return 0
// }
function usePrevious(value) {
  const ref = useRef()
  
  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

function FC(props) {
  const [total, setTotal] = useState(0)

  const prevTotal = usePrevious(total)

  //模擬didMount+didUpdate
  useEffect(() => {
    console.log(
      'FC - 模擬didMount+didUpdate',
      'total =',
      total,
      'previous total = ',
      prevTotal
    )
  }, [total]) // 相依陣列裡填入會觸發updating階段的state或props

  return (
    <>
      {console.log('FC - render')}
      <h1>FC</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC