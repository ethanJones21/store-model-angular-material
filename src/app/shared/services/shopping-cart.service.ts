import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.interface';
import { ExtendedProduct } from '../../pages/products/interfaces/product.interface';
@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    products: ExtendedProduct[] = [];

    private cartSubject = new BehaviorSubject<ExtendedProduct[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private quantitySubject = new BehaviorSubject<number>(0);

    get totalAction$(): Observable<number> {
        return this.totalSubject.asObservable();
    }
    get quantityAction$(): Observable<number> {
        return this.quantitySubject.asObservable();
    }
    get cartAction$(): Observable<ExtendedProduct[]> {
        return this.cartSubject.asObservable();
    }

    get cartList$(): Observable<any> {
        return this.cartSubject.asObservable();
    }

    updateCart(product: ExtendedProduct): void {
        this.addToCart(product);
        this.quantityProducts();
        this.calcTotal();
    }

    resetCart(): void {
        this.cartSubject.next([]);
        this.totalSubject.next(0);
        this.quantitySubject.next(0);
        this.products = [];
    }

    private addToCart(product: ExtendedProduct): void {
        const isProductInCart = this.products.find(
            ({ id }) => id === product.id
        );

        if (isProductInCart) {
            isProductInCart.qty += 1;
        } else {
            this.products.push({ ...product, qty: 1 });
        }

        this.cartSubject.next(this.products);
    }

    private quantityProducts(): void {
        const quantity = this.products.reduce(
            (acc, prod) => (acc += prod.qty),
            0
        );
        this.quantitySubject.next(quantity);
    }

    private calcTotal(): void {
        const total = this.products.reduce(
            (acc, prod) => (acc += prod.price * prod.qty),
            0
        );
        this.totalSubject.next(total);
    }
}
