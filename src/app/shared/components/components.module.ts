import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as COMPONENTS from './utils/components';
import { PipeModule } from '../pipes/pipe.module';
import { DirectiveModule } from '../directives/directives.module';


@NgModule({
  declarations: [
    ...COMPONENTS.default
  ],
  imports: [
    CommonModule,
    PipeModule,
    DirectiveModule
  ],
  exports:[
    ...COMPONENTS.default
  ]
})
export class ComponentsModule { }
