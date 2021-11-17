import {User} from '../../user/models/user';

export class AuthenticatedUserModel {


    public access_token: string;
    public user: User;

}
