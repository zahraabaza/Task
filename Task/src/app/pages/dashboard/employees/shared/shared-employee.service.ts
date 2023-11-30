import { EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Employee } from 'src/app/models/employee';

@Injectable({
  providedIn: 'root'
})
export class SharedEmployeeService {


  getEmployeeEvent = new EventEmitter();
  getEmployeeVal: Subscription;

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  initForm(data:Employee = null){
    this.form = this.fb.group({
      id: [data?.id | 0],
      name: [data?.name, Validators.required],
      employeeIdentification: [data?.employeeIdentification, Validators.required],
      phone: [data?.phone, Validators.pattern(/(^\d{10}$)/)],
      mobile: [data?.mobile, [Validators.pattern(/(^(010|011|012|015){1}\d{8}$)/), Validators.required]],
      active: [data?.active],
      hireDate: [data?.hireDate, [Validators.required]],
      departmentId: [data?.departmentId, [Validators.required]],
      position: [data?.position, [Validators.required]],
    })
  }


  GetEmployee(){
    this.getEmployeeEvent.emit();
  }
}
