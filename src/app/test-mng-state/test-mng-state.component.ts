import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { loadUsersSuccess } from '../myStore/user.actions';
import { selectAllUsers } from '../myStore/user.selectors';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-test-mng-state',
  templateUrl: './test-mng-state.component.html',
  styleUrls: ['./test-mng-state.component.scss']
})
export class TestMngStateComponent {
  
  users$!: UserModel[];
  newUserName: string = '';

  constructor(private store: Store,private userSrv:UserService){}
  
  async ngOnInit() {

    //get users of the page1
    let data = await this.userSrv.getUsers2(1).toPromise();

    // dispatching the results in the store
    if (data !== undefined) {
      this.store.dispatch(loadUsersSuccess({ users: data }));
    }else{
      this.store.dispatch(loadUsersSuccess({ users: [] }));

    }

    //get users of the page2
    let data2 = await this.userSrv.getUsers2(2).toPromise();

    // dispatching the results in the store
    if (data2 !== undefined) {
      this.store.dispatch(loadUsersSuccess({ users: data2 }));
    }

    this.store.select(selectAllUsers).subscribe(users => {
      //print the store
      this.users$=users;
      console.log('usersStore', users);
    });

  }
}
