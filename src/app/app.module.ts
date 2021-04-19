import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseCardComponent,
    PageNotFoundComponent,
    ExerciseOneComponent,
    HomePageComponent,
    ExerciseTwoComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
