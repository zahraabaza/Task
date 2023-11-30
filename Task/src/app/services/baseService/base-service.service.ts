import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';


export class BaseService<T> {
  private endPoint: string;
  private Url = environment.apiUrl ;

  constructor(public httpService: HttpService, public path: string) {
    this.endPoint = path + "/";
    this.Url += path + "/";
  }

  GetAll() {

    return this.httpService.httpGet<T[]>(this.endPoint);
  }




  GetById(id: number) {
    return this.httpService.httpGet<T>(this.endPoint  + id);
  }

  // GetByName<T>(uid: string) {
  //   return this.httpService.httpGet<T>(this.endPoint + "getByName/" + uid);
  // }

  Add(model: T) {
    return this.httpService.httpPost<T>(this.endPoint, model);
  }

  Update(id: number, model: T) {
    return this.httpService.httpPut(this.endPoint+ id, model);
  }

  Delete(id: number) {
    return this.httpService.httpDelete(this.endPoint+ id);
  }

  GetByApiName<T>(name: string) {
    return this.httpService.httpGet<T>(this.endPoint + name);
  }

  GetByApiNameAndId<T>(name: string, id: number) {
    return this.httpService.httpGet<T>(this.endPoint + name + id);
  }

  UpdateByApiName<T>(name: string, model: T) {
    return this.httpService.httpPut<T>(this.endPoint + name, model);
  }

  UpdateByApiNameAndId<T>(name: string) {
    return this.httpService.httpPut<T>(this.endPoint + name, null);
  }

  AddByApiName<T>(name: string, model: T){
    return this.httpService.httpPost<T>(this.endPoint + name, model);
  }
}
