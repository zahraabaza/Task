import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedEmployeeService } from '../shared/shared-employee.service';
import { Department } from 'src/app/models/department';
import { BaseService } from 'src/app/services/baseService/base-service.service';
import { HttpService } from 'src/app/services/http/http.service';
import { endpoint } from 'src/app/helpers/endpoint';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  @Input() modal;

  list: Department[] = [];

  baseDepartment: BaseService<Department>
  baseEmployee: BaseService<Employee>
  constructor(public shared: SharedEmployeeService, private http: HttpService) {
    this.baseDepartment = new BaseService<Department>(this.http, endpoint.department);
    this.baseEmployee = new BaseService<Employee>(this.http, endpoint.employee);
   }

  ngOnInit(): void {
    this.shared.initForm();

    this.Get();
  }

  Get(){
    this.baseDepartment.GetAll().subscribe(res=>{
      this.list = res;
    })
  }

  Add(){
    let data = this.shared.form.value;

    this.shared.form.markAllAsTouched();

    if(this.shared.form.valid){
      this.modal.hide();
      if(data.id == 0){
        this.baseEmployee.Add(data).subscribe(res=>{
          this.shared.GetEmployee();
        })
      }else{
        this.baseEmployee.Update(data.id, data).subscribe(res=>{
          this.shared.GetEmployee();
        })
      }
      this.shared.initForm();
    }
  }

}

