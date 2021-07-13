import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsOrder, Order } from '../order.interface';
import { Store } from '../stores.interface';
import { environment } from '../../../environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getStores(): Observable<Store[]> {
        return this.http.get<Store[]>(`${apiUrl}/stores`);
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${apiUrl}/orders`, order);
    }

    saveDetailsOrder(details: DetailsOrder): Observable<DetailsOrder> {
        return this.http.post<DetailsOrder>(`${apiUrl}/detailsOrders`, details);
    }
}
