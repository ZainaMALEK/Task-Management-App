import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TodoService } from './todo.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
