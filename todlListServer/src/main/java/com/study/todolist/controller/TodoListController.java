package com.study.todolist.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.study.todolist.model.dto.Todo;
import com.study.todolist.model.service.TodoService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("todoList")
public class TodoListController {
	
	@Autowired
	private TodoService service;
	
	@GetMapping("select")
	public ResponseEntity<Object> selectTodoList(){
		try {
			List<Todo> todoList = service.selectTodoList();
			return ResponseEntity.status(HttpStatus.OK).body(todoList);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
	
	@PostMapping("insert")
	public ResponseEntity<String> insertTodo(@RequestBody Todo todo){
		try {
			int result = service.insertTodo(todo);
			
			if(result > 0) {
				return ResponseEntity.status(HttpStatus.OK)
						.body("할 일 등록 완료");
			} else {
				// BAD_REQUEST : 400 -> 요청 구문이 잘못되었거나 유효하지 않음.
				return ResponseEntity.status(HttpStatus.BAD_REQUEST)
						.body("등록안됨");
			}
		} catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
	
	@DeleteMapping("delete")
	public ResponseEntity<String> deleteTodo(@RequestParam("todoNo") int todoNo){
		try {
			int result = service.deleteTodo(todoNo);
			
			if(result > 0) {
				return ResponseEntity.status(HttpStatus.OK)
						.body("할 일 삭제 완료");
			} else {
				// BAD_REQUEST : 400 -> 요청 구문이 잘못되었거나 유효하지 않음.
				return ResponseEntity.status(HttpStatus.BAD_REQUEST)
						.body("삭제 실패");
			}
		} catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
	
	@PatchMapping("changeComplete")
	public ResponseEntity<String> changeComplete(@RequestBody Map<String, Object> map){
		
		String complete = (String) map.get("complete");
		complete = complete.equals("Y") ? "N" : "Y";
		map.put("complete", complete);
		
		try {
			int result = service.changeComplete(map);
			
			if(result > 0) {
				return ResponseEntity.status(HttpStatus.OK)
						.body("완료여부 수정");
			} else {
				// BAD_REQUEST : 400 -> 요청 구문이 잘못되었거나 유효하지 않음.
				return ResponseEntity.status(HttpStatus.BAD_REQUEST)
						.body("완료여부 수정 실패");
			}
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}

}
