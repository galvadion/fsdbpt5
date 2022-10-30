import { Component, OnInit } from '@angular/core';
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
  constructor(private api: ApiService,private route: ActivatedRoute,
    public auxService: AuxServiceService) {

   }

  ngOnInit(): void {
    this.api.list.subscribe(list =>{
      this.list= list
      this.pokemon = list.find((pokemon:any)=>pokemon.number == this.route.snapshot.paramMap.get('id'))
      console.log(this.pokemon)
    })
  }

}
