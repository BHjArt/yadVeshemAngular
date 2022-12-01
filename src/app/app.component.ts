import { Component } from '@angular/core';
import { BringRegistersService } from './registers/bring-registers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BringRegistersService]
})
export class AppComponent {
  title = 'yadVeshemAngular';
}
