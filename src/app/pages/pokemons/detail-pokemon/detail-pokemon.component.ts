import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '@Interfaces/pokemon.interface';
import { PokemonService } from '@Services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemon!:Pokemon;
  id!:string;
  load = true;
  hover  = false;

  constructor(
    private pokemonService:PokemonService,
    private activedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(param=>{
      this.id = param.get('id') || '';
      this.getPokemon();
    })
  }

  getPokemon(){
    this.load = true;
    this.pokemonService.getPokemonById(this.id).subscribe({
      next:res=>{
        this.pokemon = res;
        this.load = false
      },
      error:(err)=>{
        this.load = false
      }
    })
  }
}
