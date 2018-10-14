import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './user.model';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {
  //readonly rootUrl = 'http://localhost:35661/api/Account/Login';
  api_root: string; 
  readonly options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  constructor(private http: HttpClient, private appconfig: ConfigService) { }

  //getUserClaims() {
  //  this.http.get(this.rootUrl + 'api/GetUserClaims', { headers: new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('')})});
  //}

  SignInUser(username, password) {
    const body: Login = {
      Uid: username,
      Pwd: password
    }
    //return this.http.get(this.rootUrl);
    //return this.http.post<any>(this.rootUrl + 'Login', JSON.stringify(body), this.options).pipe(
    // catchError(this.handleError<any>('test'))
    //);
    this.api_root = this.appconfig.GetKey("api_root_user") +'Account/Login';
    return this.http.post(this.api_root, JSON.stringify(body),this.options);
    //return this.http.post(this.rootUrl, JSON.stringify(body),this.options);
    //addHero(hero: Hero): Observable < Hero > {

    //  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    //    .pipe(
    //      catchError(this.handleError('addHero', hero))
    //    );
    //}
  }
    //handleError<T>(arg0: string): (err: any, caught: Observable<any>) => never {
    //    throw new Error("Method not implemented.");
    //}
  logout() {
    localStorage.removeItem('userToken');
    //this.router.navigate(['']);
  }
}
