import { Component,Input,OnInit} from '@angular/core';
import { HabitService } from './habit.service';
import {Habit} from './habit';
import { HttpErrorResponse } from '@angular/common/http';
import { HabitListComponent } from './habit-list/habit-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hab-prjct';
  
  /*@Input() public habits:Habit[] | undefined;
  ngOnInit(){
    this.getHabits();
  }
  constructor(private habitService:HabitService){}
  public getHabits():void{
    this.habitService.getHabits().subscribe(
      (response:Habit[])=>{
        this.habits=response;
      }
    ),(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  }*/
}
