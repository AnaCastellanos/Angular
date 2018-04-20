import { Injectable } from '@angular/core';
//Importamos Task desde models
import { Task } from '../models/task'; 

@Injectable()
export class DataService {
	tasks: Task[]; //Arreglo de tareas del tipo Task

  	constructor() { 
  		this.tasks = []; //Inicializa en vació el arreglo
  	}

  	//Método de obtener tareas que retorna un arreglo de Task.
  	getTask(): Task[] {
  		if(localStorage.getItem('tasks') == null ){
  			this.tasks = [];
  		}else{
  			this.tasks = JSON.parse(localStorage.getItem('tasks')); //El LS nos regresa un string
      }
  		return this.tasks;
  	}

  	//Método que agrega tareas, no retorna nada. Recibe un parámetro de tipo Task
  	addTask(task: Task): void {
  		this.tasks.unshift(task); //Insertamos al inicio un dato al arreglo
  		let tasks; //Variable local  
  		if(localStorage.getItem('tasks') == null ){
  			tasks = [];
  			tasks.unshift(task);
  			localStorage.setItem('tasks', JSON.stringify(tasks) ); //Guardamos en LS
  		}else {
  			tasks = JSON.parse(localStorage.getItem('tasks'));
  			tasks.unshift(task);
  			localStorage.setItem('tasks', JSON.stringify(tasks) );
  		}

  	}

  	removeTask(task: Task) {
      localStorage.removeItem('tasks'); //Trabajar con el localStorage necesita un procesador más pesado.
  		for (let i = 0; this.tasks.length; i++) {
  			if(task == this.tasks[i]){
  				this.tasks.splice(i, 1);  //Elimina 1 item en el índice i
  				localStorage.setItem('tasks', JSON.stringify(this.tasks) );
  			}
  		}
  	}

}
