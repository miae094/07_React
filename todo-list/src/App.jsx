import { useEffect, useState } from "react";
import "./App.css";
import SelectTodoList from "./components/selectTodoList";
import InsertTodo from "./components/InsertTodo";
import { axiosApi } from "./api/axiosAPI";
function App() {
  const [todoList, setTodoList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // 할일 가져오기
  const getTodoList = async () => {
    try {
      const resp = await axiosApi.get("/todoList/select");
      //console.log(resp.data);

      if (resp.status == 200) {
        setTodoList(resp.data);
        //console.log(setTodoList);
      }
    } catch (error) {
      console.log("TodoList 조회 중 에러 발생 : ", error);
    }
  };

  // 처음 실행될 때 값 불러오기
  useEffect(() => {
    getTodoList();
  }, []); // 의존성 배열이 비어있기 때문에 딱 한번만 실행

  useEffect(() => {
    if (todoList != null) {
      setIsLoading(false);
    }
  }, [todoList]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>TodoList</h1>
        <SelectTodoList todoList={todoList} getTodoList={getTodoList} />
        <InsertTodo getTodoList={getTodoList} />
      </div>
    );
  }
}

export default App;
