import { UsersComponent } from "./users/users.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {path:'user/:id',component:UserDetailComponent},
  {path:'',component:UsersComponent},
  {path:'searchKey/:id',component:UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
