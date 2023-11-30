import { EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { Department } from 'src/app/models/department';

@Injectable({
  providedIn: 'root'
})
export class SharedDepartmentService {

  GetDepartmentsEvent = new EventEmitter();
  GetDepartmentsVal: Subscription

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  initForm(data: Department = null){
    this.form = this.fb.group({
      id: [data?.id | 0],
      name: [data?.name, [Validators.required]],
      details: [data?.details, [Validators.required]],
      order: [data?.order, [Validators.required, Validators.min(1)]],
      active: [data?.active]
    })
  }


  GetDepartments(){
    this.GetDepartmentsEvent.emit();
  }
}
