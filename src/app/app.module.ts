import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoureComponent } from './component/coure/coure.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const appRoute: Routes=[
  {path:'cours',component: CoureComponent},
  {path:'Home',component: HomeComponent},
  {path:'',component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
    RouterModule.forRoot(appRoute),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
