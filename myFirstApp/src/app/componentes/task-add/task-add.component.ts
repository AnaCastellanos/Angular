import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Task } from '../../models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
	title: string;
	description: string;
	//Salida al componente padre que exporta un objeto de tipo tarea
	@Output() taskAdded = new EventEmitter<Task>();

	constructor() { }

	ngOnInit() {
	}

	addTask(){
		//Envía hacia el componente (task-list) padre la información
		this.taskAdded.emit({
			title: this.title,
			description: this.description,
			hide: true
		});
		//Limpiamos el arreglo
		this.title = '';
		this.description = '';
	}

}
