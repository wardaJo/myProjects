import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, async } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  /* here define important variable to control of the page */
  @Input() users:UserModel[]=[]; // includes the list of user
  page:number=1; // page info
  totalPages:number=1; // page info

  constructor(private userSrv:UserService,private route:ActivatedRoute, private router:Router){
  }

  // we define isLoading Variable to check if the data is fetched or not to show loading bar to the customer 
  isLoading=true;

  ngOnInit(){
    /* the searching and userlist are the same in the same component,
     so we distinguish between both requests through url*/
    if(this.router.url.includes('searchKey')){ /**** the request is searching****/
     this.route.paramMap.subscribe((param) => { // here fetch the key search
      const userId = param.get('id');
      if(userId!='0' && userId!=null){
        this.userSrv.getUser(userId).subscribe((searchUser)=>{ // call the service to fetch the related user from the cash
        if (searchUser!=undefined){
          this.users=[searchUser];
        }else{
          this.users=[];
        }
        });
      }else{
        this.router.navigate(['/']) // in case the user hasn't enter input we navigate it to the main page
      }

      //we cancel loading bar because the data is fetched

      this.isLoading = false;
      
    });

    
  }else{ /**** the request is show list of the users in pages****/

    // we calling the service to get the pages and all related info from API
        this.userSrv.getUsers(this.page).then((data)=>{
        this.users=data.data;
        this.page=data.page;
        this.totalPages=data.total_pages;
        this.isLoading=false;
      }).catch((error=>{
        alert("error in service");
      }))
    }
  }

  /**  this method running at every change in the search Input and do the following:
  - prevent the custmer of going next more than the pages number
  - prevent the customer of going back less than the pages number**/
  changePage(type:string){
    let page:number=this.page;
    if((type=='next') && (page+1)<=this.totalPages){
      page=this.page+1;
    }else if((type=='prev') && (page-1)>0){
      page=this.page-1;
    }

    //call the service to fetch the next page or the previous page as per the request
    this.userSrv.getUsers(page).then((data)=>{
      this.users=data.data;
      this.page=data.page;
    }).catch((error)=>{
      alert("error in service");
    })
  }
}
