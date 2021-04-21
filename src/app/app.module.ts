import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ExerciseOneComponent } from './pages/exercise-one/exercise-one.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExerciseTwoComponent } from './pages/exercise-two/exercise-two.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ExerciseThreeComponent } from './pages/exercise-three/exercise-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseCardComponent,
    PageNotFoundComponent,
    ExerciseOneComponent,
    HomePageComponent,
    ExerciseTwoComponent,
    TodoComponent,
    UserItemComponent,
    UserEditComponent,
    ExerciseThreeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
