import {User} from '../../user-management/models/user';

export class AuthenticatedUserModel {


    public access_token: string;
    public user: User;

}
