import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../baseService/base-service.service';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})
export class FacadeService<TModel> {

  constructor(private injector: Injector, private httpService: HttpService, private http: HttpClient) { }

  // private _GenderService: GenderService;
  // public get GenderService(): GenderService {
  //   if(!this._GenderService){
  //     this._GenderService = this.injector.get(GenderService);
  //   }
  //   return this._GenderService;
  // }

  private _Service: BaseService<TModel>;
  public Service(apiPath: string): BaseService<TModel> {
    // const path = (<TApiPath>(name: keyof TApiPath) => name).toString();

    if (!this._Service) {
      this._Service = new BaseService<TModel>(this.httpService, apiPath, this.http);
    }
    return this._Service;

  }


}
