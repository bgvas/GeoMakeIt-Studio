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
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import {DeclareFormControlsService} from './services/declareFormControls/declare-form-controls.service';
import {ValidationsService} from './services/validations/validations.service';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './components/home-page/home.component';
import { MapComponent } from './components/map/map.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { ProjectSideBarComponent } from './components/project-side-bar/project-side-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FeaturesService} from './services/features.service';
import { CreateProjectComponent } from '../games/components/create-project/create-project.component';
import { ImageAsCheckBoxComponent } from './components/image-as-check-box/image-as-check-box.component';
import { ProjectCardComponent } from '../games/components/project-card/project-card.component';
import { GeomakeitHelpComponent } from './components/help/geomakeit-help/geomakeit-help.component';
import { MatSelectModule} from '@angular/material/select';
import { UserManagementModule} from '../user-management/user-management.module';
import { StepByStepComponent } from './components/help/step-by-step/step-by-step.component';
import { RouterModule} from '@angular/router';
import {NgApexchartsModule} from 'ng-apexcharts';
import {PluginModule} from '../plugins/plugin.module';
import { PluginCardComponent } from '../plugins/components/plugin-card/plugin-card.component';
import { NumberToBooleanPipe} from './pipes/number-to-boolean.pipe';
import { RoleIdToRoleNamePipe } from './pipes/role-id-to-role-name.pipe';
import { EmailExistsValidatorDirective } from './custom-validators/email-exists-validator.directive';
import { CustomToolTipComponent } from './components/custom-tool-tip/custom-tool-tip.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';





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
    ProjectCardComponent,
    GeomakeitHelpComponent,
    StepByStepComponent,
    PluginCardComponent,
    NumberToBooleanPipe,
    RoleIdToRoleNamePipe,
    EmailExistsValidatorDirective,
    CustomToolTipComponent,
    ColorPickerComponent


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
        MapComponent,
        NumberToBooleanPipe,
        RoleIdToRoleNamePipe,
        EmailExistsValidatorDirective,
        CustomToolTipComponent,
        ColorPickerComponent,
        PluginCardComponent
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
        MatInputModule,
        NgbModule,
        MatSelectModule,
        UserManagementModule,
        RouterModule,
        NgApexchartsModule,
        PluginModule

    ],
    providers: [
        DeclareFormControlsService,
        ValidationsService,
        FeaturesService
    ]
})
export class SharedModule { }
