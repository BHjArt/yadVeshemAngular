import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersViewComponent } from './registers-view/registers-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [RegistersViewComponent],
  imports: [MatTableModule, MatIconModule,MatTabsModule,
    CommonModule],
  exports:[RegistersViewComponent],
 
})
export class RegistersModule { }
