import { Injectable  } from '@angular/core'

@Injectable()
export class LoginForm {
    constructor(){
        this.UserName = "";
        this.Password = "";
        this.RePassword = "";
    }
    UserName:string;
    Password:string;
    RePassword:string;
}