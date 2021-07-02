import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../user-management/models/user';
import {map} from 'rxjs/operators';
import {PluginService} from '../../plugins/services/plugin.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

apiUrl = 'http://localhost:8000/api/v1/';

  constructor(private http: HttpClient, private pluginService: PluginService) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + 'user/all').pipe(map(e => {
      return (e.filter((user: User) => user.role !== 'super_admin'));
    }))
  }

  getGameAuthorsFromAllUsers(): Observable<any> {
    return this.getAllUsers().pipe(map(e => {
      return e.filter((gameAuthor: User) => gameAuthor.role === 'game_author');
    }));
  }

  getPluginDevelopersFromAllUsers(): Observable<any> {
    return this.getAllUsers().pipe(map(e => {
      return e.filter((pluginDev: User) => pluginDev.role === 'plugin_developer');
    }));
  }

}
