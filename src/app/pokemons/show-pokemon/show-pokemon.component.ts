import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";

export interface PokemonResponse{
  abilities: Abilities[]
  moves: Moves[]
  sprites: {
    front_default: string
  }
  types: Type[]
}
// interface Ability {
//   name: string,
//   url: string
// }

export interface Abilities{
  ability: {
    name: string,
    url: string
  }
}

interface Moves {
  move:{
    name: string,
    url: string
  }
}

interface Type {
  type:{
    name: string,
    url: string
  }
}

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.scss']
})
export class ShowPokemonComponent implements OnInit {

  name: string;

  pokemonInfo: PokemonResponse;

  private _pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private actRoute: ActivatedRoute, private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.name = this.actRoute.snapshot.params.name;
    console.log(this.name);
    this._httpClient.get<PokemonResponse>(`${this._pokemonUrl}${this.name}`).subscribe(PokemonResponse => {
      this.pokemonInfo = PokemonResponse
      console.log(this.pokemonInfo);
    })

  }

}
