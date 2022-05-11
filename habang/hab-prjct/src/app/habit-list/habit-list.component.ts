import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {Done, Habit} from '../habit';
import { HabitService } from '../habit.service';
import { NgForm } from '@angular/forms';
import { daysOfTheWeek } from '../habit';
import { months } from '../habit';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.css'],
  host: {
    '[style.height.px]':'0.9 * height',
    '[style.width.px]':'0.21 * width'
  }
})
export class HabitListComponent implements OnInit {
  
  selectedHabit?:Habit;
  public habitdone:Done[]=[];
  //public habitdone:Habit[]=[];
   public habits: Habit[]=[];
  public editHabit!: Habit;
  public deleteHabit!: Habit;
  daysofweek=daysOfTheWeek;
  months=months;
  //
 
/*public checkmonth(habit:Habit,month:Number){
  var habitdone=this.habitdone as Done[];
  var thabit = habit as Done;
  //var x:Done;
  for(var x in habitdone){
    if((x.id===habit.id)&& (x.datedone.getMonth()===month)){
      return true;
    }
  }
  
  return false;
}*/
/*public randomnum(max:Number,min:Number){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}*/
public totalcount(habit:Habit){
  let difference=this.date.getTime()-habit.date.getTime();
  console.log(difference);
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  console.log(TotalDays);
  return TotalDays;
}
public countdone(habit:Habit){
  var habitdone=this.habitdone as Done[];
  var count=0;
  for(let i=0;i<habitdone.length;i++){
    if(habitdone[i].id==habit.id){
      count+=1;
    }
  }
  return count;

}
  public checkdate(habit:Habit,day:Number){
    var habitdone=this.habitdone as Done[];
    var x:Done;
    for(let i=0;i<habitdone.length;i++){
      if((habitdone[i].id==habit.id)&&(habitdone[i].datedone.getDay()==day)){
        return true;
      }
    }
    return false;
      /*if((x.id===habit.id)&& (x.datedone.getDay()===day)){
        return true;
      }
      return false;*/
    }
    


  barate=0;
  public showdone(){
    if (!(this.habitdone === undefined || this.habitdone.length == 0)) {
      this.habitdone.forEach((el)=>
    {
        console.log(el);
        
      }
      );}
      this.barate=(this.habitdone.length/this.habits.length)*100;
      console.log(this.habitdone.length);
      console.log(this.habits.length);
      console.log((this.habitdone.length/this.habits.length)*100);
      
  }
  public resetdone(){
    this.habitdone=[];
  }
  //
  date:Date;
  WhSelect(habit:Habit):void{
    this.selectedHabit = habit;
  }
  //constructor() { }

  //ngOnInit(): void {
  //}
  //@Input() public habits:Habit[] | undefined;











  ngOnInit(){
    this.getHabits();
    this.date=new Date();
    if (this.date.getHours()===0){
      this.resetdone();
    }
    //this.habitdone=[];

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
  }
  /*public getdoneHabits():void{
    this.habitService.getdoneHabits().subscribe(
      (response:Done[])=>{
        this.habitdone=response;
      }
    ),(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  }*/
  public setdone(habit:Habit):void{
    var thabit=habit as Done;
    thabit.datedone=new Date();
    this.habitdone.push(thabit);
    console.log(this.habitdone);
    this.showdone();
  }
  /*public setdone(habit:Habit):void{
    this.habitService.addDone(habit);
    this.showdone();
  }*/
  public habindone(habit:Habit):boolean{
    var done=false;
    if (!(this.habitdone === undefined || this.habitdone.length == 0)) {
      this.habitdone.forEach((el)=>{
        if (el===habit){done=true;}
      });
  }
    return done;
  }

  /*
  public Addcount(habit:Habit){ /////////////////////////////////////////////////////////////////////
    habit.count=habit.count+1;

  }

  */
  public onAddHabit(addForm: NgForm): void {
    document.getElementById('add-habit-form').click();
    addForm.value.date=new Date();
    this.habitService.addHabit(addForm.value).subscribe(
      (response: Habit) => {
        console.log(response);
        //console.log(response.date.toLocaleString());
        this.getHabits();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateHabit(habit: Habit): void {
    this.habitService.updateHabit(habit).subscribe(
      (response: Habit) => {
        console.log(response);
        this.getHabits();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteHabit(habitId: number): void {
    this.habitService.deleteHabit(habitId).subscribe(
      (response: void) => {
        console.log(response);
        this.getHabits();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /*public searchEmployees(key: string): void {
    console.log(key);
    const results: Habit[] = [];
    for (const habit of this.habits) {
      if (habit.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || habit.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || habit.state.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(habit);
      }
    }
    this.habits = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }*/
  public onOpenModal(habit: Habit, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addHabitModal');
    }
    if (mode === 'edit') {
      this.editHabit = habit;
      button.setAttribute('data-target', '#updateHabitModal');
    }
    if (mode === 'delete') {
      this.deleteHabit = habit;
      button.setAttribute('data-target', '#deleteHabitModal');
    }
    container.appendChild(button);
    button.click();
  }
}
