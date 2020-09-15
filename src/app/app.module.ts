import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonsComponent } from './pokemons/list-pokemons/list-pokemons.component';
import { ShowPokemonComponent } from './pokemons/show-pokemon/show-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonsComponent,
    ShowPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
