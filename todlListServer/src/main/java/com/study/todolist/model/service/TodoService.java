package com.study.todolist.model.service;

import java.util.List;
import java.util.Map;

import com.study.todolist.model.dto.Todo;

public interface TodoService {

	/** todoList 조회
	 * @return
	 */
	List<Todo> selectTodoList();

	int insertTodo(Todo todo);

	/** Todo 삭제
	 * @param todoNo
	 * @return
	 */
	int deleteTodo(int todoNo);

	int changeComplete(Map<String, Object> map);

}
