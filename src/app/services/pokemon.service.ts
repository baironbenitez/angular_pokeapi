import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ability, Pokemon, ResponseAllPokemon, ResponseTypes } from '../shared/interfaces/pokemon.interface';
import { switchMap,map } from 'rxjs/operators';
import { forkJoin, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url_pokemon = environment.url_pokemon;
  pokemons:Pokemon[] = [];

  constructor(private http:HttpClient) { }

  getAllPokemon(offset = 0):Observable<Pokemon []>{
    const limit = offset === 40 ? 7 : 20;
    return this.http.get<ResponseAllPokemon>(`${this.url_pokemon}/pokemon?offset=${offset * 20}&limit=${limit}`).pipe(
      map(response=>{
        return response.results
      }),
      switchMap(pokemons=>{
        if (pokemons.length === 0) {
          return of([]);
        }else{
          let peticions:Observable<Pokemon> [] = [];
          for (const pokemon of pokemons) {
            const findPokemon = this.pokemons.find(p=>p.name === pokemon.name);
            peticions.push( findPokemon? of(findPokemon) : this.getPokemonByUrl(pokemon.url));
          }
          return forkJoin(peticions).pipe(map((res)=>{
            res.forEach(pokemon=>{
              const findPokemon = this.pokemons.find(p=>p.name === pokemon.name);
              if (!findPokemon) this.pokemons.push(pokemon);
            })
            return res;
          }))
        }
      })
    )
  }

  getPokemonByUrl(url:string):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${url}`);
  }

  getPokemonById(id:string):Observable<Pokemon>{
    const findPokemon = this.pokemons.find(p=>p.id.toString() === id);
    if (findPokemon) {
     return of(findPokemon)
    } else {
      return this.http.get<Pokemon>(`${this.url_pokemon}/pokemon/${id}`).pipe(
        map(pokemon=>{
          if(pokemon.id>807)throw new Error('Pokemon no encontrado');
          this.pokemons.push(pokemon);
          return pokemon;
      }))
    }
  }

  getTypes():Observable<Ability []>{
    return this.http.get<ResponseTypes>(`${this.url_pokemon}/type`).pipe(
      map(res=>res.results)
    )
  }
}
