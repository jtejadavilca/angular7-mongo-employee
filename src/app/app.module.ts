import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    DetailEmployeeComponent,
    ListEmployeeComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
