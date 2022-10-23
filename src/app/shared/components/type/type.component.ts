import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ability } from '@Interfaces/pokemon.interface';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent{  
  @Input() type!:Ability;
}
