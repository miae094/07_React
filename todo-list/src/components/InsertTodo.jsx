import { useState } from "react";
import { axiosApi } from "../api/axiosAPI";
import "../App.css";

export default function InsertTodo({ getTodoList }) {
  const [form, setForm] = useState({ todoTitle: "", todoContent: "" });

  const handleChange = (e) => {
    const { id, value } = e.target; // 대상의 id 속성값, value값을 꺼내옴
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const insertTodo = async () => {
    const { todoTitle, todoContent } = form;

    if (todoTitle.length === 0 || todoContent.length === 0) {
      alert("모든 필드를 입력해주세요");
      return;
    }

    try {
      const resp = await axiosApi.post("/todoList/insert", {
        todoTitle: todoTitle,
        todoContent: todoContent,
      });

      if (resp.status == 200) {
        alert("할 일 등록!");
        setForm({
          todoTitle: "",
          todoContent: "",
        });
        getTodoList();
      }
    } catch (error) {
      console.log("TodoList 입력 중 에러 발생 : ", error);
    }
  };

  return (
    <div>
      <h3>할 일 제목 : </h3>
      <input
        className="input-title"
        id="todoTitle"
        value={form.todoTitle} // 상태값 연결
        onChange={handleChange} // 입력 이벤트 연결
      />
      <br />
      <h3>할 일 :</h3>
      <input
        className="input-todo"
        id="todoContent"
        value={form.todoContent} // 상태값 연결
        onChange={handleChange} // 입력 이벤트 연결
      />
      <br />
      <button className="insert-btn" onClick={insertTodo}>
        할 일 등록
      </button>
    </div>
  );
}
