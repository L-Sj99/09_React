import React, { useState } from 'react';

const StateEx2 = (props) => {
  // 상태(State) 변수 선언 -> 상태변수 count 값이 변할 때 마다 컴포넌트가 re randering이 됨
  const[count, setCount] = useState(props.init);
  
  // +, - 버튼 클릭 시 동작하는 버튼
  const plusChangeHandler = () => {
    setCount(Number(count) + 1); // 1 증가
  }
  const minusChangeHandler = () => {
    setCount(Number(count) - 1); // 1 감소
  }
    return (
      <>
        <div className='count-container'>
        <button className='minus-btn btn' onClick={minusChangeHandler}>-</button>
        <h3>{count}</h3>
        <button className='plus-btn btn' onClick={plusChangeHandler}>+</button>
        </div>
      </>
    )
}
export default StateEx2;