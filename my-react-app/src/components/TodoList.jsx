import { useState } from "react";

const TodoList = () => {
  // 작성한 todo를 기억할 List(배열) 상태
  const [todoList, setTodoList] = useState([]);
  /* 
  [
    {title:"인풋에서 쓴 값들", isDone : true/false},
    {title:"인풋에서 쓴 값들", isDone : true/false},
    {title:"인풋에서 쓴 값들", isDone : true/false}
  ]
  */
  const [inputValue, setInputValue] = useState("");

  // Add Todo 버튼 클릭 시 todoList 상태 업데이트 이벤트 핸들러 함수
  const handleAddTodo = () => {
    // 전개 역할로 ...todoList사용함
    // (기존 todoList가 가진 배열을 펼치고 뒤에 새로운 요소를 추가)
    setTodoList([...todoList, { title: inputValue, isDone: false }]);
    setInputValue(""); // input창 값 비우기
  };

  // 완료/미완료 상태 업데이트 이벤트 핸들러 함수
  const handleToggleTodo = (index) => {
    // Javascript spread 연산자 (...) (혹은 전개연산자) :
    // 기존 배열이나 객체의 전체 또는 일부를 다른 배열이나 객체로 복사

    // React 불변성의 법칙 : React가 상태의 변경을 감지해야하기 때문에
    // 상태가 이전과 다르다고 React에게 알려주기 위해서는 상태의 참조값(메모리주소)이
    // 기존과 다르게 변경되어야 함
    // -> 변경되기 이전 원본의 상태값은 불변해야 하고,
    // -> 새로운 참조객체를 만들어 이가 변경되었음을 React에게 알려줌

    // todoList[0].isDone = true; 이런식으로 사용 불가능함(불변성의법칙)
    const newTodoList = todoList.map((todo, i) =>
      // 현재 배열의 i와 매개변수 index가 같으면 변경된 내용으로,
      // 같지 않으면 기존 todo그대로 적용하여
      // 새로운 배열을 만들어 반환
      i === index ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodoList(newTodoList);
  };

  // todoList에 있는 현재 상태(todo)를 삭제하는 이벤트 핸들러 함수
  const handleDeleteTodo = (index) => {
    // 1. React는 상태원본을 변경해서는 안된다
    // 2. splice 함수 : mutates 함수라서 원본이 변경되는 함수이므로
    // state인 todoList에 직접적으로 사용 안됨(불변성의 법칙)

    const newTodoList = [...todoList]; // todoList와 똑같은 배열 만들기(복사)
    // newTodoList.splice(어디서부터잘라낼것인지 index, 몇개자를것인지)
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

    // filter는 새로운 배열을 반환하므로 직접 원본 배열을 복사할 필요 X
    // filter는 원본 배열 유지됨(변경하지 않음)
    /* 이렇게 써도 된당.. 이게 더 좋은 방법일듯
      const newTodoList2 = todoList.filter((todo, i) => i !== index);
      setTodoList(newTodoList2);
    */
  };

  return (
    <div>
      <h1>나의 TodoList</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todoList.map((todo, index) => {
          // 여기에 중괄호 있다 ? return 써야힘
          // 이게 싫으면 소괄호() 쓰면 바로 return됨!
          return (
            <li key={index}>
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
              <button onClick={() => handleToggleTodo(index)}>
                {todo.isDone ? "미완료" : "완료"}
              </button>
              <button onClick={() => handleDeleteTodo(index)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
