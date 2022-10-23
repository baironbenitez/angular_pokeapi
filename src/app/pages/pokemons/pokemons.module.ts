import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';


@NgModule({
  declarations: [
    PokemonsComponent,
    DetailPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    NgbPaginationModule,
    SharedModule
  ]
})
export class PokemonsModule { }
