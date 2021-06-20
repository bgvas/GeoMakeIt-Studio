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



  constructor(private http: HttpClient, private pluginService: PluginService) { }

  getAllUsers(): Observable<User[]> {
    const url = '../assets/dummyJson/users.json';
    return this.http.get<User[]>(url).pipe(map(e => {
      return (e['data'].filter((user: User) => user.role !== 'super_admin'));
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
