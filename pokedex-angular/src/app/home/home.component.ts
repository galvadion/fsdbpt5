import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { AuxServiceService } from '../aux-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search: String = ""

  list: any[] = [ ]
  result: any[] =[]

  constructor(private api: ApiService, 
    public auxService: AuxServiceService) { }


  filter(){
    this.result = this.list.filter((pokemon)=> pokemon.name.toLowerCase().includes(this.search.toLowerCase()))
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
            "type": pokemon.types.map((type: any)=>type.type.name),
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
      this.auxService.sortedById.next(true)
    })
    
  }
  this.auxService.sortedById.subscribe(orderById =>{
    if(orderById){
      this.result = this.list.sort((a:any,b:any) => a.number - b.number)
    }else{
      this.result = this.list.sort((a:any,b:any) => a.name.localeCompare(b.name))
    }
  })
  
  }

}
