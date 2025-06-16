import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UserProfileComponent } from './user-profile/user-profile';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todolist } from './todolist/todolist';
import { HoverBackground } from './todolist/hover-background';
import { TaskDetail } from './todolist/task-detail/task-detail';
import { FilterPipe } from './todolist/filter-pipe';
import { ProductComponent } from './product/product';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    UserProfileComponent,
    Todolist,
    HoverBackground,
    TaskDetail,
    FilterPipe,
    ProductComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
