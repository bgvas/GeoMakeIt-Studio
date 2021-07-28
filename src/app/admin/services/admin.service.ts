import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../user-management/models/user';
import {map} from 'rxjs/operators';
import {PluginService} from '../../plugins/services/plugin.service';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  _storedObject: any;
  private path = environment.be_Url;

  constructor(private http: HttpClient) { }

  getUserOnlineStatus(): Observable<any> {
    return this.http.get(this.path + 'users/status');
  }

  set storeObject(obj) {
    this._storedObject = obj;
  }

  get storeObject() {
    return this._storedObject;
  }

}
