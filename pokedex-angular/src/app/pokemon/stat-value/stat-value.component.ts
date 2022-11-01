import {Component, Input, OnInit} from '@angular/core';
import {AuxServiceService} from "../../aux-service.service";

@Component({
  selector: 'app-stat-value',
  templateUrl: './stat-value.component.html',
  styleUrls: ['./stat-value.component.scss']
})
export class StatValueComponent implements OnInit {

  @Input() pokemonType: String = "";

  @Input() stat:number = 0;

  constructor(public auxService: AuxServiceService) {
  }

  ngOnInit(): void {
  }

  getPercentage(stat:number){
    return (stat*0.5)+'%'
  }

}
