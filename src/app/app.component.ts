import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { UserModel } from './models/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userSrv:UserService){}
  title = 'assessment';
}
