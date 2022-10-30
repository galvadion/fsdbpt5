import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuxServiceService } from 'src/app/aux-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sortedById: boolean = false
  
  constructor(private aux: AuxServiceService) {
    aux.sortedById.subscribe(sortedById=>{
      this.sortedById = sortedById
    })
   }

  ngOnInit(): void {

  }

  getSort(): String {
    return this.sortedById ? "#" : "AZ"
  }

  changeSort(){
    this.aux.sortedById.next(!this.sortedById)
  }

}
