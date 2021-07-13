import { Injectable } from '@angular/core';
import { CategoriesService } from '../../pages/products/services/categories.service';
import { genresArr } from '../../components/sidebar/checklist/data/genres.array';
import { pricesArr } from '../../components/sidebar/checklist/data/prices.array';
import { brandsArr } from '../../components/sidebar/checklist/data/brands.array';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import { ExtendedProduct } from '../../pages/products/interfaces/product.interface';

@Injectable({
    providedIn: 'root',
})
export class FiltersService {
    prices = pricesArr;
    genres = genresArr;
    // TODO: solo porque me da flojera pero deberia venir del backend
    brands = brandsArr;

    filteredProducts = new Subject<ExtendedProduct[]>();
    arr1: any[] = [];
    arr2: any[] = [];
    dataArr: any;
    filters: any = {};

    constructor(private categoriesServ: CategoriesService) {}

    getFilters(): Observable<string[]> {
        return this.categoriesServ.getCategories();
    }

    setData(data: any) {
        this.dataArr = data;
    }

    applyFilters() {
        this.filteredProducts.next(
            _.filter(this.dataArr, _.conforms(this.filters))
        );
    }

    filterExact(property: string, rule: any) {
        this.filters[property] = (val: any) => val == rule;
        this.applyFilters();
    }

    filterSmallerThan(property: string, rule: any) {
        rule = rule.split(' ')[2];
        rule = Number(rule.slice(3));
        console.log(rule);
        this.filters[property] = (val: any) => val < rule;
        this.applyFilters();
    }

    filterMany(property: string, rule: any) {
        this.filters[property] = (val: any) => val == rule;
        this.arr1 = _.filter(this.dataArr, _.conforms(this.filters));
        if (this.arr2.length > 0) {
            this.arr2.push(...this.arr1);
            this.filteredProducts.next(this.arr2);
        } else {
            this.arr2.push(...this.arr1);
            this.filteredProducts.next(this.arr1);
        }
    }

    search(property: any, termino: string) {
        termino = termino.toLowerCase();
        if (termino.length > 2) {
            this.filters[property] = (val: any) =>
                val.toLowerCase().includes(termino);
            this.applyFilters();
        } else {
            return;
        }
    }

    removeFilter(property: string) {
        delete this.filters[property];
        // @ts-expect-error
        this[property] = null;
        this.applyFilters();
        // if (property == 'category') {
        //     const chbx: any = document.getElementsByName('radiobtnCategory');
        //     console.log(chbx);
        //     for (let i = 0; i < chbx.length; i++) {
        //         chbx[i].checked = false;
        //     }
        // }
    }
}
