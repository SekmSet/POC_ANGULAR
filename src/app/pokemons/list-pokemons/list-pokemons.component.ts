import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface PokemonListResponse {
  count: number;
  results: Pokemon[];
}

export interface Pokemon {
  name: string
  url?: string
}

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {
  pokemonCount: number;
  listPokemon: Pokemon[];

  private _pokemonsListUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1050';

  constructor(private _httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this._httpClient.get<PokemonListResponse>(this._pokemonsListUrl).subscribe(PokemonListResponse =>{
      this.pokemonCount = PokemonListResponse.count;
      this.listPokemon = PokemonListResponse.results.map(result =>({
        name: result.name,
      }));
    });
  }
}
