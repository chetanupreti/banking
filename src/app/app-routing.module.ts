import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from "./add-user/add-user.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { SearchbycityComponent } from "./searchbycity/searchbycity.component";
import { DeleteuserComponent } from "./deleteuser/deleteuser.component";
const routes: Routes = [
  {path:"addUser",component:AddUserComponent},
  {path:"getAll",component:UserDetailsComponent},
  {path:"searchbycity",component:SearchbycityComponent},
  {path:"deleteUser",component:DeleteuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
