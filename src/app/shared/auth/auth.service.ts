import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { constants } from './../../constants';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    jwt: JwtHelper = new JwtHelper();
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        this.token = localStorage.getItem('token');
        console.log('token in storage: '+ this.token);
    }

    login(uid: string): Observable<boolean> {

        const headers = new Headers({ 'Content-Type': constants.contentType });
        const options = new RequestOptions({ headers });
        const body = JSON.stringify({ secret: uid });
        console.log('get started');
        return this.http.post(environment.baseURL + '/google/jwt', body, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const token = response.json() && response.json().jwt;

                if (response.status === 200 && token) {
                    // set token property
                    this.token = token;

                    // store jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(constants.token, this.token);
                    return true;

                } else if (response.status === 401) {
                    // return false to indicate failed login
                    return false;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        // clear token from local storage to log user out
        this.token = null;
        localStorage.removeItem(constants.token);
    }

    getCurrentUser(): any {
        return localStorage.getItem(constants.currentUser);
    }

    getTokenPayload() {
        const token = this.token || localStorage.getItem(constants.token);
        return this.jwt.decodeToken(token);
    }

    isLoggedIn() {
        return tokenNotExpired();
    }
}
