import {Component, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {GameService} from '../../services/game.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Game} from '../../models/games/game';
import {Error} from '../../../error-handling/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppService} from '../../../app.service';
import {ErrorResponseModel} from '../../../error-handling/error_response_model';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit, OnDestroy {

  designRadio: any;
  projectForm: FormGroup;
  notification = new NotificationsComponent();
  private unsubscribe = new Subject<void>();

  @Output() project = new EventEmitter<any>();

  constructor(private service: GameService, private fb: FormBuilder, private appService: AppService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // declare form structure //
  initializeForm(): void {
    this.projectForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      user_id: this.fb.control('')
    })
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.projectForm.get('user_id').setValue(this.appService.currentUser().id)
      this.createNewProject(this.projectForm.value);
    }
  }

  createNewProject(newProject: Game): any {
      return this.service.createNewGame(newProject).pipe(takeUntil(this.unsubscribe)).subscribe(
          createdProject => {
                this.project.emit(newProject);
                this.notification.display(createdProject.message, 'success');
            },
            (error: ErrorResponseModel) => {
                 this.notification.display('Can\'t create new project', 'danger');
                 console.log(error.message + ' - ' + error.errors);
          }
      )
  }

  onChange(event) {
    this.designRadio = event;
  }

  selectedTemplate(template) {
      console.log('Create Project');
      console.log(template);
  }

  onCancel() {
    this.projectForm.reset();
  }
}
