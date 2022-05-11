import { Component, OnInit } from '@angular/core';
import { Done, Habit } from '../habit';
import { HabitListComponent } from '../habit-list/habit-list.component';
import { daysOfTheWeek } from '../habit';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  
  constructor(private Habitcomp:HabitListComponent) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  daysofweek=daysOfTheWeek;
  habits=this.Habitcomp.habits;
  habitdone=this.Habitcomp.habitdone;
  public checkdate(habit:Habit,day:Number){
    var x;
    for(x in this.habitdone){console.log(x);}
      /*if((x.id===habit.id)&& (x.datedone.getDay()===day)){
        return true;
      }
    }*/
    return false;
  }

  

}
