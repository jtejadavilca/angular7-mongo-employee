import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { FormEmployeeComponent } from './components/form-employee/form-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailEmployeeComponent,
    ListEmployeeComponent,
    SearchEmployeeComponent,
    FormEmployeeComponent
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
