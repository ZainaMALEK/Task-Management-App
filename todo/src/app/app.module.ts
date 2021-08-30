import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/index'

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule, StoreModule.forRoot(reducers) ],
  declarations: [ AppComponent ],
  providers:    [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
