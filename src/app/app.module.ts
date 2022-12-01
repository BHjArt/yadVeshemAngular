import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistersViewComponent } from './registers/registers-view/registers-view.component';

import { RegistersModule } from './registers/registers.module';
import { HttpClientModule } from '@angular/common/http';
import { BringRegistersService } from './registers/bring-registers.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RegistersModule,BrowserAnimationsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [BringRegistersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
