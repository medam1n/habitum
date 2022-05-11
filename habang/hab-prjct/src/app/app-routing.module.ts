import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';

const routes: Routes = [
  {path:'weekly', component : WeeklyComponent },
  {path:'monthly', component : MonthlyComponent }/*,
  {path:'',component:AppComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
