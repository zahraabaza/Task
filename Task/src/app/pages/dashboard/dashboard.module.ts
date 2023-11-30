import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavComponent } from './nav/nav.component';

import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { DashboardComponent } from './dashboard.component';
import { CardComponent } from './shared/card/card.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from './shared/modal/modal.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { DepartmentFormComponent } from './departments/department-form/department-form.component';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/assets/i18n/translation.config';
import { NgxPaginationModule } from 'ngx-pagination'


@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    CardComponent,
    EmployeesComponent,
    DepartmentsComponent,
    ModalComponent,
    EmployeeFormComponent,
    DepartmentFormComponent,
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    NgxPaginationModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }}
    ),
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
