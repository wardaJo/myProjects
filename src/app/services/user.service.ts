import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom, map, of } from 'rxjs';
import { UserModel } from '../models/user-model';
import { PageModel } from '../models/page-model';
import { Store } from '@ngrx/store';
import { loadUsersSuccess } from '../myStore/user.actions';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // We Define users Variable to be as cashing where we will store all the users 
  // we are using the library BehaviorSubject for best storing
  // note: we can use also session variables or localStorage
  public users:BehaviorSubject<UserModel[]>;

  constructor(private store: Store,private http:HttpClient) {
    this.users=new BehaviorSubject<UserModel[]>([]);
  }

// Define function to fetch the users from API
  async getUsers(page:number):Promise<PageModel>{
      const url='https://reqres.in/api/users?page='+page;
      const  result= await firstValueFrom<PageModel>(this.http.get<PageModel>(url));
      console.log(result);
      this.users.next(result.data); // like subscribe

      //dispatch with the store
      if (result.data !== undefined) {
        this.store.dispatch(loadUsersSuccess({ users: result.data }));
      }
      
      return result;
  }

// Define function to fetch the users from cash (users of type BehaviorSubject)
 getUser(id:string):Observable<UserModel|undefined>{
   let user:UserModel|undefined= this.users.value.find(
    (obj:UserModel)=>{
      if( obj.id.toString()==id) return obj; else return null;
    })
    return of(user);
  }


  getUsers2(page:number):Observable<UserModel[]>{
    let users!:UserModel[];
    const url='https://reqres.in/api/users?page='+page;
    return  this.http.get<PageModel>(url).pipe(
      map((data: PageModel) => users=data.data)
    );
    console.log('ff',users)
    return of(users);
    
}

}
