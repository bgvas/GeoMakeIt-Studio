import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {DeletePopUpComponent} from './components/delete-pop-up/delete-pop-up.component';
import {DetailsCardComponent} from './components/details-card/details-card.component';
import {Error404Component} from './components/error404/error404.component';
import { InputComponent } from './components/input/input.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import {DeclareFormControlsService} from './services/declareFormControls/declare-form-controls.service';
import {ValidationsService} from './services/validations/validations.service';
import { HomeComponent } from './components/home-page/home.component'
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FeaturesService} from './services/features.service';
import { CreateProjectComponent } from '../games/components/create-project/create-project.component';
import {CreatePluginComponent} from '../plugins/components/create-plugin/create-plugin.component';
import { ImageAsCheckBoxComponent } from './components/image-as-check-box/image-as-check-box.component';
import { ProjectCardComponent } from '../games/components/project-card/project-card.component';
import { GeomakeitHelpComponent } from './components/help/geomakeit-help/geomakeit-help.component';
import { MatSelectModule} from '@angular/material/select';
import { UserManagementModule} from '../user-management/user-management.module';
import { StepByStepComponent } from './components/help/step-by-step/step-by-step.component';
import { RouterModule} from '@angular/router';
import {NgApexchartsModule} from 'ng-apexcharts';
import { PluginCardComponent } from '../plugins/components/plugin-card/plugin-card.component';
import { NumberToBooleanPipe} from './pipes/number-to-boolean.pipe';
import { RoleIdToRoleNamePipe } from './pipes/role-id-to-role-name.pipe';
import { EmailExistsValidatorDirective } from './custom-validators/email-exists-validator.directive';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import {AngularD3CloudModule} from 'angular-d3-cloud';
import { RemoveUnderscoresPipe } from './components/pipes/remove-underscores.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    SpinnerComponent,
    DeletePopUpComponent,
    DetailsCardComponent,
    Error404Component,
    InputComponent,
    NotificationsComponent,
    ValidationMessagesComponent,
    HomeComponent,
    HeaderBarComponent,
    FooterBarComponent,
    CreateProjectComponent,
    ImageAsCheckBoxComponent,
    ProjectCardComponent,
    GeomakeitHelpComponent,
    StepByStepComponent,
    PluginCardComponent,
    NumberToBooleanPipe,
    RoleIdToRoleNamePipe,
    EmailExistsValidatorDirective,
    ColorPickerComponent,
    RemoveUnderscoresPipe,
    ChangePasswordComponent,
    PaginatorComponent,
    CreatePluginComponent
],
    exports: [
        SpinnerComponent,
        DeletePopUpComponent,
        InputComponent,
        HeaderBarComponent,
        FooterBarComponent,
        NotificationsComponent,
        NumberToBooleanPipe,
        RoleIdToRoleNamePipe,
        EmailExistsValidatorDirective,
        ColorPickerComponent,
        PluginCardComponent,
        RemoveUnderscoresPipe,
        ValidationMessagesComponent,
        PaginatorComponent
    ],
    imports: [
        CommonModule,
        MatTooltipModule,
        MatButtonToggleModule,
        ReactiveFormsModule,
        MatFormFieldModule,
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
        AngularD3CloudModule,
        MatCheckboxModule,
        MatPaginatorModule

    ],
    providers: [
        DeclareFormControlsService,
        ValidationsService,
        FeaturesService
    ]
})
export class SharedModule { }
