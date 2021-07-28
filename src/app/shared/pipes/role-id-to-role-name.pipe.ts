import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleIdToRoleName'
})
export class RoleIdToRoleNamePipe implements PipeTransform {

  transform(roleId: number): string {
    switch (roleId) {
      case 1: {
        return 'Admin';
      }
      case 2: {
        return 'Game Author';
      }
      case 3: {
        return 'Plugin Developer';
      }
      default: {
        return 'unknown';
      }
    }
  }

}
