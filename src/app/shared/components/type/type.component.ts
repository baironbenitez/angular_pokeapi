import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ability } from '@Interfaces/pokemon.interface';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  
  @Input() type!:Ability;
  @Input() disabled = true;


  constructor(private router:Router) { }

  ngOnInit(): void { 
  }

  goToType():void{
    if (!this.disabled) {
      this.router.navigate(['types',this.type.name])
    }
  }

}
