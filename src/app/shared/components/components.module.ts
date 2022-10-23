import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as COMPONENTS from './utils/components';
import { PipeModule } from '../pipes/pipe.module';


@NgModule({
  declarations: [
    ...COMPONENTS.default
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports:[
    ...COMPONENTS.default
  ]
})
export class ComponentsModule { }
