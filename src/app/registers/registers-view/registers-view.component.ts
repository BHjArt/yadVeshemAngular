
import { Component } from '@angular/core';
import {User} from 'src/app/models/user.model'
import {BringRegistersService} from '../bring-registers.service'
@Component({
  selector: 'app-registers-view',
  templateUrl: './registers-view.component.html',
  styleUrls: ['./registers-view.component.css'],
 
})
export class RegistersViewComponent {
  public usersList: User[]=[];
  displayedColumns: string[] = ['phone', 'name', 'email', 'country','comments','number','eventName',
'innerEventName','year','hebrewYear','salary','status'];

  constructor(public _usersService: BringRegistersService){}
    ngOnInit() {
 
      this._usersService.GetAllRegistersFromServer().subscribe((res:User[])=>{
        console.log(res);
        this.usersList=res;
       });
      
      


  }
 
   
}
