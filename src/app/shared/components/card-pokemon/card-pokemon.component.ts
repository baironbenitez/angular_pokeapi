import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '@Interfaces/pokemon.interface';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent{
  @Input() pokemon!:Pokemon;
  
  constructor (private router:Router){}

  goToDetail(id:number):void{
   this.router.navigate(['pokemons', id]);
  }
}
