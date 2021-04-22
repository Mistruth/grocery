import useCount from './hooks'

export default function () {

  const { increment } = useCount()

  return <button onClick={increment}>增加</button>
}

