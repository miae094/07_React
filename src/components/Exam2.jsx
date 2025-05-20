import { useEffect, useState } from "react";

// 함수형 컴포넌트 예제
const Exam2 = (props) => {
  // 상태
  const [count, setCount] = useState(0);

  // 마운트, 업데이트, 언마운트 제어
  // useEffect() : 함수형 컴포넌트에서 렌더링 이후 실행되는 코드(부수효과)를 작성할 때
  // 사용하는 Hook
  useEffect(() => {
    // 이 안의코드는 컴포넌트가 렌더링 된 후 실행됨
    console.log("마운트 완료 또는 업데이트됨");

    return () => {
      // 정리코드(clean-up코드) : 언마운트시 실행
      console.log("언마운트 됨");
    };
  }, [count]);
  // 의존성 배열 ([])
  // -> 빈 배열을 넣으면 마운트시 1회 실행 + 언마운트 시 return 구문 1회 실행됨
  // -> 의존성 배열에 있는 값이 변결될 때마다
  // 1. 이전 Effect를 정리(clean-up)
  // 2. 그 다음 새로운 Effect 실행(마운트됨)

  const handleClick = () => {
    setCount(count + 1);
  };

  // 랜더링
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>증가버튼</button>
      <h2>
        부모가 전달한 값 : {props.mark} {props.test}
      </h2>
    </div>
  );
};

export default Exam2;
