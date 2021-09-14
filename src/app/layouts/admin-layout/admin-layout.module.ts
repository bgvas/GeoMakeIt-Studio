import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { TableListComponent } from '../../templateTools/table-list/table-list.component';
import { TypographyComponent } from '../../templateTools/typography/typography.component';
import { MapsComponent } from '../../templateTools/maps/maps.component';
import { UpgradeComponent } from '../../templateTools/upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatProgressBarModule
    ],
    exports: []
    ,
    declarations: [
        TableListComponent,
        TypographyComponent,
        MapsComponent,
        UpgradeComponent
    ]
})

export class AdminLayoutModule {}
