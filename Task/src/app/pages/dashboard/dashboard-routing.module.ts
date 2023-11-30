import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  {path: '', redirectTo:'employees', pathMatch: 'full'},
  {
    path: '',
   component: DashboardComponent,
   children:[
    {
      path: 'employees',
      component: EmployeesComponent,
    },
    {
      path: 'departments',
      component: DepartmentsComponent
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
