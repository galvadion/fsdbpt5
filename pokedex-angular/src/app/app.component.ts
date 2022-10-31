import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex-angular';

  list: any[] = []

  constructor(private api: ApiService){

  }

  ngOnInit(): void {
    for (let number = 1; number < 151; number++){
      this.api.getPokemon(number).subscribe( (pokemon:any) =>{
        this.list.push({
              "number": pokemon.id,
              "img": pokemon.sprites.other['official-artwork']['front_default'],
              "name": pokemon.name,
              "height": pokemon.height,
              "weight":pokemon.weight,
              "moves": pokemon.moves.slice(0,2).map((move: any)=>move.move.name),
              "types": pokemon.types.map((type: any)=>type.type.name),
              "base": {
                  "HP": pokemon.stats[0]["base_stat"],
                  "Attack": pokemon.stats[1]["base_stat"],
                  "Defense": pokemon.stats[2]["base_stat"],
                  "Spa": pokemon.stats[3]["base_stat"],
                  "Spd": pokemon.stats[4]["base_stat"],
                  "Speed": pokemon.stats[5]["base_stat"]
              }
            }
        )
        this.api.list.next(this.list)
      })
    }
  }
}
