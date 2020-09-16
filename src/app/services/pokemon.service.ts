import { Injectable } from '@angular/core';
import {PokemonResponse} from "../pokemons/show-pokemon/show-pokemon.component";
import {Observable} from "rxjs";
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {PokemonListResponse} from "../pokemons/list-pokemons/list-pokemons.component";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  name: string;

  private _pokemonBaseUrl ='https://pokeapi.co/api/v2/'

  constructor(private actRoute: ActivatedRoute, private _httpClient: HttpClient) {
  }

  getPokemon(name : string): Observable<PokemonResponse> {
     return this._httpClient.get<PokemonResponse>(`${this._pokemonBaseUrl}pokemon/${name}`);
  }

  getPokemons():Observable<PokemonListResponse> {
    return this._httpClient.get<PokemonListResponse>(`${this._pokemonBaseUrl}pokemon?limit=1050`);
  }
}
