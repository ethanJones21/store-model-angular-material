import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FiltersService } from '../../../shared/services/filters.service';
import { pricesArr } from './data/prices.array';
import { genresArr } from './data/genres.array';

export interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}

/**
 * @title Basic checkboxes
 */
@Component({
    selector: 'Checklist',
    templateUrl: 'checklist.component.html',
    styleUrls: ['checklist.component.scss'],
})
export class CheckListComponent implements OnInit {
    genreInit = '';
    priceInit = '';
    categoryInit = '';
    genres = genresArr;
    prices = pricesArr;
    categories: string[] = [];

    constructor(public filtersServ: FiltersService) {}

    ngOnInit(): void {
        this.initialize();
    }

    initialize() {
        this.filtersServ.getFilters().subscribe((categories: string[]) => {
            this.categories = categories;
        });
    }

    removeFilter(property: string) {
        this.filtersServ.removeFilter(property);
        this.reset(property);
    }

    reset(property: string) {
        switch (property) {
            case 'category':
                this.categoryInit = '';
                break;
            case 'genre':
                this.genreInit = '';
                break;
            case 'price':
                this.priceInit = '';
                break;
            default:
                break;
        }

        // BUG: tiene un problema y es que un boton resetea todos los filtros anteriores
        // const FILTROS = {
        //     category: (this.categoryInit = ''),
        //     genre: (this.genreInit = ''),
        //     price: (this.priceInit = ''),
        // };
        // //@ts-ignore
        // return FILTROS[property];
    }
}
