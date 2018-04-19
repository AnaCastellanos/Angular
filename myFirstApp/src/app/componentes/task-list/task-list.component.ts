import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task'; 
//importamos el servicio
import { DataService } from '../../services/data.service'


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
	tasks: Task[];

	//Instanciamos el servicio.
	constructor(public dataService: DataService ) { }

	ngOnInit() {
		this.tasks = this.dataService.getTask(); //El arreglo tendrá todo lo que contiene el servicio
	}

	//Método: Recibe una tarea y la agrega
	addTask(task: Task) {
		this.dataService.addTask(task); //Agrega al servicio
	}

}
