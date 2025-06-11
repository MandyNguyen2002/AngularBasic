import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { UserProfileComponent } from './user-profile/user-profile';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todolist } from './todolist/todolist';
import { HoverBackground } from './todolist/hover-background';


@NgModule({
  declarations: [
    App,
    UserProfileComponent,
    Todolist,
    HoverBackground
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
