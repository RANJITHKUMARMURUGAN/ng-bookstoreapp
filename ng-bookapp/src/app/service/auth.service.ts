import {Injectable} from '@angular/core'
import { BehaviorSubject, Observable, of  } from 'rxjs'
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    userInfo:BehaviorSubject<any> = new BehaviorSubject(null);
    jwtHelper = new JwtHelperService();

    constructor(private http: HttpClient) {
        this.loadUserInfo();
    }

    loadUserInfo() {
        let userdata = this.userInfo.getValue();
        if (!userdata) {
            const access_token = localStorage.getItem('access_token');
            if (access_token) {
                userdata = this.jwtHelper.decodeToken(access_token);
                this.userInfo.next(userdata);
            }
        }
    }
    userLogin(login: any): Observable<boolean> {
        if (login && login.email && login.password) {
            return this.http.post("http://localhost:8080/user/login", login).pipe(
                map((data: any) => {
                    // console.log(data);
                    if (!data) {
                        return false;
                    }
                    localStorage.setItem('access_token', data.data);
                    const decodedUser = this.jwtHelper.decodeToken(data.data);
                    this.userInfo.next(decodedUser);
                    return true;
                })
            );
        }
        return of(false);
    }

    isAuthenticated() {
        // get the auth token from localStorage
        let token = localStorage.getItem('access_token');
    
        // check if token is set, then...
        if (token) {
            return true;
        }
    
        return false;
    }
}