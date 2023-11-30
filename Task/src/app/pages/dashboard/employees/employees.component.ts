import { Component, OnInit, ViewChild } from '@angular/core';
import { endpoint } from 'src/app/helpers/endpoint';
import { Employee } from 'src/app/models/employee';
import { BaseService } from 'src/app/services/baseService/base-service.service';
import { HttpService } from 'src/app/services/http/http.service';
import { SharedEmployeeService } from './shared/shared-employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  @ViewChild('modal') modal;

  p: number = 1


  list: Employee[] = [];

  baseEmployee: BaseService<Employee>
  constructor(private http: HttpService, public shared: SharedEmployeeService) {
    this.baseEmployee = new BaseService<Employee>(this.http, endpoint.employee)
   }

  ngOnInit(): void {
    this.GetAll();

    if(this.shared.getEmployeeVal==undefined){
      this.shared.getEmployeeVal = this.shared.getEmployeeEvent.subscribe(row=>{
        this.GetAll();
      })
    }
  }

  GetAll(){
    // debugger
    this.baseEmployee.GetAll().subscribe(res=>
      this.list = res
    );
  }

  GetRow(row){
    this.shared.initForm(row);
  }

  Del(){
    this.baseEmployee.Delete(this.shared.form.value.id).subscribe(res=>
      {
        this.GetAll();
      }
    );
  }

}
