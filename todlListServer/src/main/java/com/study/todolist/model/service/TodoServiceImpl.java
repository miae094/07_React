package com.study.todolist.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.study.todolist.model.dto.Todo;
import com.study.todolist.model.mapper.TodoMapper;

@Service
public class TodoServiceImpl implements TodoService {
	
	@Autowired
	private TodoMapper mapper;
	
	@Override
	public List<Todo> selectTodoList() {
		
		return mapper.selectTodoList();
	}
	
	@Override
	public int insertTodo(Todo todo) {
		
		return mapper.insertTodo(todo);
	}
	
	
	// 할 일 삭제
	@Override
	public int deleteTodo(int todoNo) {
		return mapper.deleteTodo(todoNo);
	}
	
	@Override
	public int changeComplete(Map<String, Object> map) {
		return mapper.changeComplete(map);
	}
}
