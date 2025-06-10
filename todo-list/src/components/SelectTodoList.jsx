import { useEffect, useState } from "react";
import { axiosApi } from "../api/axiosAPI";
import "../App.css";

const SelectTodoList = ({ todoList, getTodoList }) => {
  const deleteTodo = async (todoNo) => {
    try {
      const resp = await axiosApi.delete("todoList/delete", {
        params: { todoNo: todoNo },
      });

      if (resp.status == 200) {
        alert("할 일 삭제!");
        getTodoList();
      }
    } catch (error) {
      console.log("TodoList 삭제 중 에러 발생 : ", error);
    }
  };

  const changeComplete = async (todoNo, complete) => {
    try {
      const resp = await axiosApi.patch("todoList/changeComplete", {
        todoNo: todoNo,
        complete: complete,
      });

      if (resp.status == 200) {
        console.log("완료여부 수정 완료");
        getTodoList();
      }
    } catch (error) {}
  };
  return (
    <div className="todo-container">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>할일</th>
            <th>완료여부</th>
            <th>등록일</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => (
            <tr key={index}>
              <td>{todo.todoNo}</td>
              <td>{todo.todoTitle}</td>
              <td>{todo.todoContent}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => changeComplete(todo.todoNo, todo.complete)}
                >
                  {todo.complete}
                </button>
              </td>
              <td>{todo.regDate}</td>
              <td>
                <button className="btn" onClick={() => deleteTodo(todo.todoNo)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SelectTodoList;
