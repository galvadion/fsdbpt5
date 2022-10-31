import {Component, Input, OnInit} from '@angular/core';
import {AuxServiceService} from "../../aux-service.service";

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

    @Input() pokemon: any;

    constructor(public auxService: AuxServiceService) {
    }

    ngOnInit(): void {
    }

}
