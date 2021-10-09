import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roles = new Map<number, string>();

  public constructor() {
    this.roles.set(1, 'super admin').set(2, 'plugin developer').set(3, 'game author');
  }

  public getRoleTitle(key: number) {
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
