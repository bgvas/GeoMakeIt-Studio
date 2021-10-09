import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roles = new Map<number, string>();

  public constructor() {
    this.roles.set(1, 'super_admin').set(2, 'plugin_developer').set(3, 'game_author');
  }

  public getRoleTitle(key: number): string {
    return this.roles.get(key);
  }

  public getMainRole(_roles: number[]): number {
    if (_roles?.length === 0) {
      return this.roles.size;
    } else {
      return Math.min(..._roles);
    }
  }
}
