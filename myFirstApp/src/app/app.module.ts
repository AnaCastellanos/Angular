import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Debemos importarlo extra. Se utiliza para acceder a los forms.


import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TaskAddComponent } from './componentes/task-add/task-add.component';
import { TaskListComponent } from './componentes/task-list/task-list.component';
import { TaskComponent } from './componentes/task/task.component';

//Los servicios se agregan manualmente: primero se importan y después se agregan a los Providers
import {DataService} from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskAddComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
