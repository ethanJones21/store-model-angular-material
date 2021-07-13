import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category.interface';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
const apiUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class CategoriesService {
    constructor(private http: HttpClient) {}

    getCategories(): Observable<string[]> {
        return this.http
            .get<Category[]>(`${apiUrl}/categories`)
            .pipe(
                map((categories: Category[]) =>
                    categories.map((category) => category.name)
                )
            );
    }
}
