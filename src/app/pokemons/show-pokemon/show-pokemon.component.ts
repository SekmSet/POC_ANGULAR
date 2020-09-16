import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {PokemonService} from "../../services/pokemon.service";

export interface PokemonResponse{
  abilities: Abilities[]
  moves: Moves[]
  sprites: {
    front_default: string
  }
  types: Type[]
}

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

  constructor(private actRoute: ActivatedRoute, private _httpClient: HttpClient, private PokemonService : PokemonService ) { }

  ngOnInit(): void {
    this.name = this.actRoute.snapshot.params.name;
    this.PokemonService.getPokemon(this.name).subscribe(PokemonResponse => {
      this.pokemonInfo = PokemonResponse
    })
  }
}
