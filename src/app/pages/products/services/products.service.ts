import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environment } from '../../../../environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${apiUrl}/products`);
    }

    updateStock(productId: number, stock: number): Observable<any> {
        const body = { stock: stock };
        return this.http.patch<any>(`${apiUrl}/${productId}`, body);
    }
}
