"use client"

import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Todos from '@/components/Todos';

export default function Home() {

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div >
      {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
      <Todos/>
    </div>
  )
}
