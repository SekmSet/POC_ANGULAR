import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonsComponent } from './pokemons/list-pokemons/list-pokemons.component';
import { ShowPokemonComponent } from './pokemons/show-pokemon/show-pokemon.component';

const routes: Routes = [
  {
    path : 'pokemons',
    component : ListPokemonsComponent
  },
  {
    path : 'pokemons/:name',
    component: ShowPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
