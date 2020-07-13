import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.scss';
import { ADD_ONE, MINUS_ONE, ADD_ONE_ASYNC, MINUS_ONE_ASYNC } from '../../state-management/actions';

type CounterProps = {

}

// eslint-disable-next-line no-empty-pattern
export const Counter = ({} : CounterProps) => {
  const dispatch = useDispatch();
  const { number } = useSelector((state : any) => state.counter);

  const increaseNumber = () => {
    dispatch({ type: ADD_ONE });
  };
  const decreaseNumber = () => {
    dispatch({ type: MINUS_ONE });
  };
  const increaseNumberAsync = () => {
    dispatch({ type: ADD_ONE_ASYNC });
  };
  const decreaseNumberAsync = () => {
    dispatch({ type: MINUS_ONE_ASYNC });
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