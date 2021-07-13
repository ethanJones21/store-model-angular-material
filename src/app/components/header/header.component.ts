import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FiltersService } from '../../shared/services/filters.service';

@Component({
    selector: 'Header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @ViewChild('termino') termino!: ElementRef;

    constructor(private router: Router, public filtersServ: FiltersService) {}

    ngOnInit() {}

    linkToProducts() {
        return this.router.navigate(['/products']);
    }

    reset() {
        this.termino.nativeElement.value = '';
        this.filtersServ.removeFilter('name');
    }
}
