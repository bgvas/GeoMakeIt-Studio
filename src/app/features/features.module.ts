import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {DeletePopUpComponent} from './components/delete-pop-up/delete-pop-up.component';
import { ButtonTogglesComponent} from './components/button-toggles/button-toggles.component';
import {DetailsCardComponent} from './components/details-card/details-card.component';
import {Error404Component} from './components/error404/error404.component';
import {IconsComponent} from './components/icons/icons.component';
import { InputComponent } from './components/input/input.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TooltipInfoCircleComponent} from './components/tooltip-info-circle/tooltip-info-circle.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ValidationMessagesComponent } from './components/validations/validation-messages/validation-messages.component';
import {DeclareFormControlsService} from './services/declareFormControls/declare-form-controls.service';
import {ValidationsService} from './services/validations/validations.service';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './components/home-page/home.component';
import { MapComponent } from './components/map/map.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { ProjectSideBarComponent } from './components/project-side-bar/project-side-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FeaturesService} from './services/features.service';
import {GameModule} from '../games/game.module';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ImageAsCheckBoxComponent } from './components/image-as-check-box/image-as-check-box.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';





@NgModule({
  declarations: [
    SpinnerComponent,
    DeletePopUpComponent,
    ButtonTogglesComponent,
    DetailsCardComponent,
    Error404Component,
    IconsComponent,
    InputComponent,
    NotificationsComponent,
    TooltipInfoCircleComponent,
    ValidationMessagesComponent,
    HomeComponent,
    MapComponent,
    HeaderBarComponent,
    FooterBarComponent,
    ProjectSideBarComponent,
    CreateProjectComponent,
    ImageAsCheckBoxComponent,
    ProjectCardComponent
  ],
    exports: [
        SpinnerComponent,
        DeletePopUpComponent,
        ButtonTogglesComponent,
        InputComponent,
        TooltipInfoCircleComponent,
        HeaderBarComponent,
        FooterBarComponent,
        NotificationsComponent,
        MapComponent
    ],
    imports: [
        CommonModule,
        MatTooltipModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBEckmuR4cwjzfgkK_JqnzLGyViz1AdKps'
        }),
        MatIconModule,
        NgbTooltipModule,
        MatSnackBarModule,
        MatButtonModule,
        MatInputModule
    ],
    providers: [
        DeclareFormControlsService,
        ValidationsService,
        FeaturesService
    ]
})
export class FeaturesModule { }
