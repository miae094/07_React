package com.study.todolist.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.study.todolist.model.dto.Todo;

@Mapper
public interface TodoMapper {

	/** todoList 조회
	 * @return
	 */
	List<Todo> selectTodoList();

	/** todoList 등록
	 * @param todo
	 * @return
	 */
	int insertTodo(Todo todo);

	/** Todo 삭제
	 * @param todoNo
	 * @return
	 */
	int deleteTodo(int todoNo);

	int changeComplete(Map<String, Object> map);

}
