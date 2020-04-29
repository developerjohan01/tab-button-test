import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyTabButtonComponent} from "./my-tab-button.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [MyTabButtonComponent],
  exports: [
    MyTabButtonComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class MyTabButtonModule { }
