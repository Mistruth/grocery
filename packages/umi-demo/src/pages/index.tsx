import Increment from './increment'
import Decrement from './decrement'
import useCount from './hooks'


export default function IndexPage() {
  const { count } = useCount()

  return (
    <div>
      <Increment></Increment>
      <Decrement></Decrement>
      <div>
        {count}
      </div>
    </div>
  );
}
