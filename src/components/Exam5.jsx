// JSX 예제

import { useState } from "react";
import img1 from "../assets/20250507144519_00001.jpg";

const Exam5 = () => {
  // return <Exam5_1 />;
  // return <Exam5_2 />;
  // return <Exam5_3 isLogin={true} />;
  // return <Exam5_4 isLogin={true} />;
  return <Exam5_5 />;
};

// JSX 예제 1 : 자바스크립트 변수로 사용하기
const Exam5_1 = () => {
  const name = "React";
  const element = <h1>Hello, {name}</h1>;

  return element;
};

// JSX 예제 2 : img 태그 이미지 사용
const Exam5_2 = () => {
  const [userImg, setUserImg] = useState(
    "https://cdn-design.amorepacific.com/contents/2024/03/21155936/24_25_00.png"
  );

  return <img src={img1} />;
};

// JSX 예제 3 : 로그인 여부에 따라 화면 다르게 보이기
const Exam5_3 = ({ isLogin }) => {
  // 조건문 사용
  if (isLogin) {
    return <h1>환영합니다!</h1>;
  } else {
    return <h1>로그인 해주세요</h1>;
  }
};

// JSX 예제 4 : 로그인 여부에 따라 화면 다르게 보이기(삼항 연산자)
// return() 안에서 조건문 사용이 안되기때무네!
const Exam5_4 = (props) => {
  return <h1>{props.isLogin ? "환영합니다" : "로그인 해주세욤"}</h1>;
};

// JSX 예제 5 : 배열을 이용한 화면 렌더링 방법(***중요 : 자주 사용함!! ***)
// - 클라이언트(React) <-> 서버(SpringBoot)
// - 서버에서 응답받은 데이터는 대부분 배열(List) 형태
const Exam5_5 = () => {
  // 서버에서 아래 배열(list) 를 응답받았다고 가정
  const members = ["짱구", "맹구", "철수", "유리", "훈이"];

  // JS 내장함수 중 배열을 하나씩 순차접근해서 콜백함수 내에 있는 내용 수행 수
  // 새로운 배열을 만들어 반환 -> map
  // [<li>짱구</li>, <li>맹구</li>, <li>철수</li>, <li>유리</li>, <li>훈이</li>]

  // 1. filter
  // 2. map -> 이거임!
  // 3. reduce

  const listItems = members.map((mem, index) => <li key={index}>{mem}</li>);
  // hook.js:608 Each child in a list should have a unique "key" prop.
  // -> React에서 동적인 리스트를 렌더링 할때
  // 각 자식 컴포넌트가 고유한 key 속성을 가져야 한다는 규칙 위배시 발생하는 경고!
  // 고유한 key값을 작성하면 경고 해결 -> 보통 key 값은 index 값으로 사용함
  return <ul>{listItems}</ul>;
};

export default Exam5;
