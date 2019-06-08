import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', component: ListEmployeeComponent },
    { path: 'findByFirstName', component: SearchEmployeeComponent },
    { path: '**', component: ListEmployeeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
}) export class AppRoutingModule { }
