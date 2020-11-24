import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../service/data/todo.service';

export class Todo {
constructor(public id: number,
            public description: string,
            public done: boolean,
            public targetDate: Date
            ){

  }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message : String;
//todos = [new Todo(1,'Learn to JAVA', true, new Date()),
       // new Todo(1,'Learn to PAYTHON', false, new Date()),
       // new Todo(1,'Learn to .NET', false, new Date()),
       // new Todo(1,'Learn to VB Script', false, new Date())

      // {id:1, description:'Learn to JAVA'},
      // {id:2, description:'Learn to PAYTHON'},
      // {id:3, description:'Learn to .NET'},
      // {id:4, description:'Learn to VBSCRIPT'}  
    
  //  ]

  // todo = {
  //   id:1,
  //   description:'Learn to JAVA'
  // }
  constructor(private todoservice: TodoService, private router:Router) { }

  ngOnInit() {
     this.refreshTodo();
  }

  refreshTodo(){
    this.todoservice.retriveAllTodos('sogurjar').subscribe(
      response => {
      console.log(response);
      this.todos = response;
      })
  }

  deleteTodo(id){
   this.todoservice.deleteTodo('sogurjar',id).subscribe(
     response =>{
     console.log(response);
  this.message = `Delete Successfull ${id}`})
  this.refreshTodo();
  }

  updateTodo(id){
   this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }
}
