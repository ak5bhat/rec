import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { NmsComponent } from './nms/nms.component';

import { SignupComponent } from './signup/signup.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material import


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    
    MenuComponent,
    NmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
