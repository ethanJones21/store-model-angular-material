import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
@Component({
    selector: 'Cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    quantity$ = this.shoppingCartSvc.quantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    cartList$ = this.shoppingCartSvc.cartList$;
    constructor(
        private shoppingCartSvc: ShoppingCartService,
        private router: Router
    ) {}
    goToCheckout(): void {
        this.router.navigate(['/checkout']);
    }
}
