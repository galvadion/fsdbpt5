import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {AuxServiceService} from '../aux-service.service';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-pokemon', templateUrl: './pokemon.component.html', styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: any
  list: any[] = []

  selectedPokemon = new BehaviorSubject<any>(null)

  nextPokemonNumber: number | null = null
  previousPokemonNumber: number | null = null

  constructor(private api: ApiService, private route: ActivatedRoute, public auxService: AuxServiceService) {

  }


  ngOnInit(): void {
    this.route.params.subscribe(_ => {
      this.selectedPokemon.next(this.api.list.getValue().find((pokemon: any) => pokemon.number == this.route.snapshot.paramMap.get('id')))
    })
    this.api.list.subscribe(list => {
      this.selectedPokemon.next(list.find((pokemon: any) => pokemon.number == this.route.snapshot.paramMap.get('id')))
    })
    this.selectedPokemon.subscribe(pokemon => {
      this.pokemon = pokemon;
      this.getSurroundingPokemon();
      this.api.getDescription(this.pokemon.number).subscribe((data: any) => {
        this.pokemon.description = data.flavor_text_entries.filter((text: any) => text.language.name == "en")[0].flavor_text
      })
    })
  }


  private getSurroundingPokemon() {
    if (this.pokemon.number !== 1) {
      this.previousPokemonNumber = this.pokemon.number - 1;
    }
    if (this.pokemon.number !== Math.max(...this.api.list.getValue().map((pokemon: any) => pokemon.number))) {
      this.nextPokemonNumber = this.pokemon.number + 1;
    }
  }

}
