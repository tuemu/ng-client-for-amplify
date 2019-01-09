import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
 
import Amplify, { Auth } from 'aws-amplify';
import { environment } from './../../environments/environment';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean>;
  password: String;
  constructor(private router: Router) {
    Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  /** Sing-up */
  public signUp(email, password): Observable<any> {
    this.password = password;
    return from(Auth.signUp(email, password, email));
  }

  /** Confirming */
  public confirmSignUp(email, code): Observable<any> {
    return from(Auth.confirmSignUp(email, code));
  }

  /** Sign-in */
  public signIn(email, password): Observable<any> {
    return from(Auth.signIn(email, password)).pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

  /** Getting information of a logged-in user */
  public getData(): Observable<any> {
    return from(Auth.currentAuthenticatedUser());
  }
 
  /** Getting idtoken */
  public getIdToken(): string {
    // Auth.currentSession()
    // .then(data => {
    //   console.log("Auth.currentSession() is ...");
    //   console.log(data);
    // })
    // .catch(err => console.log(err));

    // console.log("currentAuthenticatedUser is ...");
    // console.log(Auth.currentAuthenticatedUser());
    //return Auth.currentSession()['__zone_symbol__value']['idToken']['jwtToken'];

    // console.log("__zone_symbol__value is ...");
    // console.log(Auth.currentAuthenticatedUser()['__zone_symbol__value']);

    // console.log("idToken is ...");
    // console.log(Auth.currentAuthenticatedUser()['__zone_symbol__value']['idToken']);

    // console.log("jwtToken is ...");
    // console.log(Auth.currentAuthenticatedUser()['__zone_symbol__value']['idToken']['jwtToken']);

    // Auth.currentSession()
    // .then(data => {
    //   console.log("data['idToken']['jwtToken'] is ...");
    //   console.log(data['idToken']['jwtToken']);
    //   return  data['idToken']['jwtToken'];
    // });

    var userAddress = localStorage.getItem(
      environment.localstorageBaseKey + 'LastAuthUser'
    );
    return localStorage.getItem(
      environment.localstorageBaseKey + userAddress + '.idToken'
    );
  }
 
 
  /** Getting a status of logging-in */
  public isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser()).pipe(
      map(result => {
        this.loggedIn.next(true);
        return true;
      }),
      catchError(error => {
        this.loggedIn.next(false);
        return of(false);
      })
    );
  }
 
  /** Log-out */
  public signOut() {
    from(Auth.signOut()).subscribe(
      result => {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      },
      error => console.log(error)
    );
  }
}
