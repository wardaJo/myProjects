import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./../services/user.service";
import { Component } from '@angular/core';
import { UserModel } from "../models/user-model";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  // we define isLoading Variable to check if the data is fetched or not to show loading bar to the customer 
  public isLoading=true;

  userDetail:UserModel|undefined;

  constructor(private userSrv:UserService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.route.paramMap.subscribe((param) => {
      //handle userId from the route then call the service to get the related data from the cash
      const userId = param.get('id');
      if(userId!=null){
        this.userSrv.getUser(userId).subscribe((data)=>{
          if (data!=undefined){
            this.userDetail=data;
          }
        });
      }
      
      //we cancel loading bar because the data is fetched
      this.isLoading = false;
      
    });

  }

  goBack(){
      this.router.navigate(['/']);
  }

}
