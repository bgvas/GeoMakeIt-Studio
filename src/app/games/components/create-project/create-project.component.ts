import {Component, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {GameService} from '../../services/game.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Game} from '../../models/games/game';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppService} from '../../../app.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit, OnDestroy {

  designRadio: any;
  createProjectForm: FormGroup;
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
    this.createProjectForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required),
      user_id: this.fb.control('')
    })
  }

  onSubmit() {
    if (this.createProjectForm.valid) {
      this.createProjectForm.get('user_id').setValue(this.appService.GetCurrentUser().id)
      this.createNewProject(this.createProjectForm.value);
    }
  }

  createNewProject(newProject: Game): any {
      return this.service.createNewGame(newProject).pipe(takeUntil(this.unsubscribe)).subscribe(
          project => {
                this.project.emit(newProject);
                this.notification.showNotification('Your project, created successfully', 'success');
            },
            (error: Error) => {
                 this.notification.showNotification(error.displayed_message, 'danger');
                 console.log('Error on create new Project: ' + error.code + ' - ' + error.message);
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
    this.createProjectForm.reset();
  }
}
