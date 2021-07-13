import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';
import { Product, ExtendedProduct } from '../interfaces/product.interface';
import { CategoriesService } from '../services/categories.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'Product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
    @Input() product!: ExtendedProduct;
    @Input() index!: number;
    @Output() addToCartClick = new EventEmitter<ExtendedProduct>();

    constructor(private categoriesServ: CategoriesService) {}

    ngOnInit() {}

    onClick(): void {
        this.addToCartClick.emit(this.product);
    }
}
