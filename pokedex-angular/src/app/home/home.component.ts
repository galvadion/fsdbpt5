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
    this.api.list.subscribe(list =>{
      this.list = list;
      this.auxService.sortedById.next(true)
    })
    this.list = this.api.list.getValue()
    this.auxService.sortedById.subscribe(orderById =>{
    if(orderById){
      this.result = this.list.sort((a:any,b:any) => a.number - b.number)
    }else{
      this.result = this.list.sort((a:any,b:any) => a.name.localeCompare(b.name))
    }
  })
  
  }

}
