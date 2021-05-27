import {Component, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';
import {GameService} from '../../services/game.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsComponent} from '../../../shared/components/notifications/notifications.component';
import {Game} from '../../models/games/game';
import {Error} from '../../../classes/error/error';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

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

  @Output() project = new EventEmitter();

  constructor(private service: GameService, private fb: FormBuilder) { }

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
      description: this.fb.control('', Validators.required)
    })
  }

  onSubmit() {
    if(this.createProjectForm.valid) {
      this.createNewProject(<Game>this.createProjectForm.value);
    }
  }

  createNewProject(newProject: Game): any {
      return this.service.postNewGameForSpecificUser(newProject).pipe(takeUntil(this.unsubscribe)).subscribe(
          (project: Game) => {
            this.project.emit(true);
            this.notification.showNotification('Your project, created successfully', 'success');
            this.createProjectForm.reset();
          },
          (error: Error) => {
              if (error.code === 422) {
                  this.notification.showNotification('This project title, already exists', 'danger');
              } else {
                  this.notification.showNotification('Can\'t create new project', 'danger');
              }
              console.log('Create new Project: ' + error.code + ' - ' + error.message);
          }
      )
  }

  onChange(event) {
    this.designRadio = event;
  }

  selectedTemplate(template) {
  }

  onCancel() {
    this.createProjectForm.reset();
  }
}
