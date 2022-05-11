import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Habit,Done} from './habit'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
  public getHabits():Observable<Habit[]>{
    return this.http.get<Habit[]>(`${this.apiServerUrl}/habits/all`);
  }
  public getdoneHabits():Observable<Done[]>{
    return this.http.get<Done[]>(`${this.apiServerUrl}/habits/alldone`);
  }
  public addHabit(habit:Habit):Observable<Habit>{
    return this.http.post<Habit>(`${this.apiServerUrl}/habits/add`,habit);
  }
  public addDone(habit:Habit):Observable<Habit>{
    return this.http.post<Habit>(`${this.apiServerUrl}/habits/addtodone`,habit);
  }
  public updateHabit(habit:Habit):Observable<Habit>{
    return this.http.put<Habit>(`${this.apiServerUrl}/habits/update`,habit);
  }
  public deleteHabit(habitId:Number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/habits/delete/${habitId}`);
  }
}
