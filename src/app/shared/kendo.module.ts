import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DropDownsModule,
    ButtonsModule
  ],
  exports: [DropDownsModule,
    ButtonsModule]
})
export class KendoModule { }
