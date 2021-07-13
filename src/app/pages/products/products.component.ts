import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Product, ExtendedProduct } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { switchMap, tap, map } from 'rxjs/operators';
import { FiltersService } from '../../shared/services/filters.service';

@Component({
    selector: 'Products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    // products!: ExtendedProduct[];
    subs = new Subscription();
    products: ExtendedProduct[] = [];
    products$ = this.filtersService.filteredProducts.asObservable();

    constructor(
        private shoppingCartSvc: ShoppingCartService,
        private productsServ: ProductsService,
        private categoriesServ: CategoriesService,
        private filtersService: FiltersService
    ) {}

    ngOnInit(): void {
        this.getProductsExtendsCategories();
        this.setFilters();
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    setFilters() {
        return this.products$.subscribe(
            (products) => (this.products = products)
        );
    }

    getProductsExtendsCategories() {
        return this.categoriesServ
            .getCategories()
            .pipe(
                switchMap((categories: string[]) => {
                    return this.getProducts(categories);
                })
            )
            .subscribe((products: ExtendedProduct[]) => {
                this.filtersService.setData(products);
                this.filtersService.applyFilters();
                this.products = products;
            });
    }

    private getProducts(categories: string[]): Observable<ExtendedProduct[]> {
        return this.productsServ.getProducts().pipe(
            map((products: Product[]) => {
                const prods: any[] = [...products];
                prods.map((prod) => {
                    prod.category = categories[prod.categoryId - 1];
                    delete prod.categoryId;
                });
                return prods;
            })
        );
    }

    addToCart(product: ExtendedProduct): void {
        this.shoppingCartSvc.updateCart(product);
    }
}
