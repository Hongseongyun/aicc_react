import React from 'react';
import { useSelector } from 'react-redux';

const Left3 = () => {
  const number = useSelector((state) => state.number); // 스토어에 저장된 데이터를 조회
  console.log(number);
  return (
    <div>
      <h2>Left3:{number}</h2>
    </div>
  );
};

export default Left3;
