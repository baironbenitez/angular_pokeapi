import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@Interfaces/pokemon.interface';
import { PokemonService } from '@Services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  load = true;
  pokemons:Pokemon[] = [];
  page =  1;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(event = 1):void{
    this.page = event;
    this.load = true;
    this.pokemonService.getAllPokemon(this.page - 1).subscribe({
      next:(res)=>{
        this.pokemons = res;
        this.load = false;
      },
      error:()=>{
        this.load = false;
      }
    });
  }
}
