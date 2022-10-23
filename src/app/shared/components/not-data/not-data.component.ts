import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-data',
  templateUrl: './not-data.component.html'
})
export class NotDataComponent{
  @Input() message = 'Lo sentimos no se encontro informacion';
}
