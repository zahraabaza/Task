import { Component, Input, OnInit } from '@angular/core';
import { SharedDepartmentService } from '../shared/shared-department.service';
import { BaseService } from 'src/app/services/baseService/base-service.service';
import { Department } from 'src/app/models/department';
import { HttpService } from 'src/app/services/http/http.service';
import { endpoint } from 'src/app/helpers/endpoint';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {

  @Input() modal;

  baseDepartment: BaseService<Department>
  constructor(public shared: SharedDepartmentService, private http: HttpService) {
    this.baseDepartment = new BaseService<Department>(this.http, endpoint.department);
   }

  ngOnInit(): void {
    this.shared.initForm();
  }


  Add(){

    this.shared.form.markAllAsTouched();

    let data = this.shared.form.value;

    if(this.shared.form.valid){
      this.modal.hide();
      if(data.id == 0){
        this.baseDepartment.Add(data).subscribe(res=>{
          this.shared.GetDepartments();
        })
      }else{
        this.baseDepartment.Update(data.id, data).subscribe(res=>{
          this.shared.GetDepartments();
        })
      }
    }

  }

  Del(){
    this.modal.hide();
    this.baseDepartment.Delete(this.shared.form.value.id).subscribe(res=>{
      this.shared.GetDepartments();
    })
  }

}
