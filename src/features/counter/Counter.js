import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import { increment, decrement, reset, incrementByAmount } from './counterSlice';


const Counter = () => {

    const [amount, setAmount] = React.useState('');
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


  return (
    <section>
        <p>{count}</p>
        <div>
            <button type='submit' onClick={() => dispatch(increment())}>+</button>&nbsp;&nbsp;
            <button type='submit'  onClick={() => dispatch(decrement())}>-</button>&nbsp;
            <button type='submit'  onClick={() => dispatch(reset())}>Reset</button>
            <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button type='submit' onClick={() => dispatch(incrementByAmount(Number(amount || 0)))}>Add Amount</button>
        </div>
    </section>
  )
}

export default Counter;