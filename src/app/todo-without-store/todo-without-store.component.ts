import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-without-store',
  templateUrl: './todo-without-store.component.html',
  styleUrls: ['./todo-without-store.component.css']
})
export class TodoWithoutStoreComponent implements OnInit{

   public  tasks = []
   taskForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.tasks = []
   }


  ngOnInit(): void {
  this.buildForm();

  }

  buildForm() {
    this.taskForm = this.fb.group({
      text: ""
  })
}

   addTask() {
      if (this.taskForm?.invalid) return ;
     this.tasks.push({
       text: this.taskForm.value.text,
       toggle: false
     });
     this.taskForm.reset();
   }

   removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  toggle(task) {
    task.done = !task.done;
  }



}

