import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTreeModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatRadioModule,
        MatOptionModule,
        MatBadgeModule,
        MatCheckboxModule,
    ],
})
export class MaterialModule {}
