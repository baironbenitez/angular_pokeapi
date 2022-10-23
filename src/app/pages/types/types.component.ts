import { Component, OnInit } from '@angular/core';
import { Ability } from '@Interfaces/pokemon.interface';
import { PokemonService } from '@Services/pokemon.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  types:Ability[] = [];
  load = true;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes(): void{
    this.pokemonService.getTypes().subscribe({
      next:res =>{
        this.types = res;
        this.load = false;
      },
      error:()=>this.load = false,
    });
  }
}
