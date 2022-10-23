import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'pokemons',
    loadChildren:()=>import('./pokemons/pokemons.module').then(m=>m.PokemonsModule)
  },
  {
    path: 'types', 
    loadChildren: () => import('./types/types.module').then(m => m.TypesModule)
  },
  {
    path:'',
    redirectTo:'pokemons',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
