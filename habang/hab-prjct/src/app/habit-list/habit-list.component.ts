import { Component, OnInit } from '@angular/core';
import {habits,Habit} from '../habit';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css']
})
export class HabitListComponent implements OnInit {
  
  selectedHabit?:Habit;
  habits=habits;
  WhSelect(habit:Habit):void{
    this.selectedHabit = habit;
  }
  constructor() { }

  ngOnInit(): void {
  }

}