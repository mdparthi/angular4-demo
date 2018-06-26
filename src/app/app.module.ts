import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directive/highlight.directive';
import { UnlessDirective } from './directive/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    UnlessDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
