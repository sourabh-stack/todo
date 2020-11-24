import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoService } from '../service/data/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.id = this.route.snapshot.params['id']
   this.todo = new Todo(this.id,'',false,new Date());
   if(this.id!=-1){
   this.todoService.retriveTodo('sogurjar', this.id).subscribe(data => this.todo = data)
   }
  }

  saveTodo(){
    if(this.id == -1){
//Create TODO
 this.todoService.createTodo('sogurjar',this.todo).subscribe(data =>{ 
      console.log(data)
    this.router.navigate(['todos'])

    })
    
   } else{
    this.todoService.updateTodo('sogurjar',this.id,this.todo).subscribe(data =>{ 
      console.log(data)
    this.router.navigate(['todos'])}
    )
  }
  }
}
