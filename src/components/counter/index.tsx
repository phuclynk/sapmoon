import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import { ADD_ONE, MINUS_ONE, ADD_ONE_ASYNC } from '../../state-management/actions';
import { action } from '../../state-management/actions';

type CounterProps = {

}

export const Counter = () => {
  const dispatch = useDispatch();
  const { number } = useSelector((state : any) => state.counter);

  const increaseNumber = () => {
    dispatch({ type: ADD_ONE });
  };
  const decreaseNumber = () => {
    dispatch({ type: MINUS_ONE });
  };
  const increaseNumberAsync = () => {
    action(ADD_ONE_ASYNC);
    console.log('Increase Async Call');
    // dispatch({ type: ADD_ONE });
  };
  const decreaseNumberAsync = () => {
    console.log('Decrease Async Call');
    // dispatch({ type: MINUS_ONE });
  };

  return (
    <div className="App" >
      <header className="App-header">
        <h1>{number}</h1>
        <div className='counter-container'>
          <button onClick={decreaseNumber} type="button" className='button button__subtract'>-</button>
          <button onClick={increaseNumber} type="button" className='button button__add'>+</button>
          <button onClick={decreaseNumberAsync} type="button" className='button button__subtract'>(-)</button>
          <button onClick={increaseNumberAsync} type="button" className='button button__add'>(+)</button>
        </div>
      </header>
    </div>
  );
};