import useCount from './hooks'

export default function () {

  const { decrement } = useCount()

  return <button onClick={decrement}>减少</button>
}