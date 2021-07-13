import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { CheckListComponent } from './sidebar/checklist/checklist.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        CheckListComponent,
        CartComponent,
    ],
    imports: [CommonModule, MaterialModule, FormsModule],
    exports: [
        HeaderComponent,
        SidebarComponent,
        CheckListComponent,
        CartComponent,
    ],
})
export class ComponentsModule {}
