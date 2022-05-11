import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    SideBarComponent,
    WeeklyComponent,
    MonthlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
