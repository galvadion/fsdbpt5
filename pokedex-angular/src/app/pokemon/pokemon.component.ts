import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AuxServiceService } from '../aux-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: any
  list: any[] = []

  nextPokemonNumber: number | null = null
  previousPokemonNumber: number | null = null
  constructor(private api: ApiService,private route: ActivatedRoute,
    public auxService: AuxServiceService) {

   }


  ngOnInit(): void {
    this.route.params.subscribe( _ => {
        this.pokemon = this.list.find((pokemon:any)=>pokemon.number == this.route.snapshot.paramMap.get('id'))
        this.getSurroundingPokemon();
      }) 
    this.api.list.subscribe(list =>{
      this.list= list
      this.pokemon = list.find((pokemon:any)=>pokemon.number == this.route.snapshot.paramMap.get('id'))
       this.getSurroundingPokemon();
    })
  }


  private getSurroundingPokemon() {
    if(this.pokemon){
    if (this.pokemon.number !== 1) {
      this.previousPokemonNumber = this.pokemon.number - 1;
    }
    if (this.pokemon.number !== Math.max(...this.list.map((pokemon: any) => pokemon.number))) {
      this.nextPokemonNumber = this.pokemon.number + 1;
    }}
  }
}
