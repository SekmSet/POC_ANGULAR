import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PokemonService} from "../../services/pokemon.service";


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

  constructor(private _httpClient: HttpClient,  private PokemonService : PokemonService) {

  }

  ngOnInit(): void {
    this.PokemonService.getPokemons().subscribe(PokemonListResponse =>{
      this.pokemonCount = PokemonListResponse.count;
      this.listPokemon = PokemonListResponse.results.map(result =>({
        name: result.name,
      }));
    });
  }
}
