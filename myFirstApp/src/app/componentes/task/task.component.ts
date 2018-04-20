import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input('task') task:Task; //Recibe una tarea, se nombra como task y es de tipo Task

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  //Borrar tarea
  removeTask(task: Task) {
  	const response = confirm('Are you sure to delete it?');
  	if(response) {
  		this.dataService.removeTask(task);//Dentro del servicio llamamos el método de remove.
  	}  
  }

}
