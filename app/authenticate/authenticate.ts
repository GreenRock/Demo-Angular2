import { Injectable  } from '@angular/core'

@Injectable()
export class LoginForm {
    constructor(){
        this.UserName = "";
        this.Password = "";
    }
    UserName:string;
    Password:string;
}