import { Component, OnInit } from '@angular/core';
import { endpoint } from 'src/app/helpers/endpoint';
import { Department } from 'src/app/models/department';
import { BaseService } from 'src/app/services/baseService/base-service.service';
import { HttpService } from 'src/app/services/http/http.service';
import { SharedDepartmentService } from './shared/shared-department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  list: Department[] =[];

  baseDepartment: BaseService<Department>
  constructor(private http: HttpService, public shared: SharedDepartmentService) {
    this.baseDepartment = new BaseService<Department>(this.http, endpoint.department);
   }

  ngOnInit(): void {
    this.GetAll();

    if(this.shared.GetDepartmentsVal==undefined){
      this.shared.GetDepartmentsVal = this.shared.GetDepartmentsEvent.subscribe(row=>{
        this.GetAll();
      })
    }
  }

  GetAll(){
    this.baseDepartment.GetAll().subscribe(res=>{
      this.list = res;
    })
  }


}
