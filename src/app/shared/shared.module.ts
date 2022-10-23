import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '@Components/components.module';
import { PipeModule } from './pipes/pipe.module';
import { DirectiveModule } from './directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    DirectiveModule
  ],
  exports:[
    PipeModule,
    ComponentsModule
  ]
})
export class SharedModule { }
