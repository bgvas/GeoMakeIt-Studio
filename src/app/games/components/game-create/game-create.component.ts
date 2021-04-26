import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/games/game';
import {NotificationsComponent} from '../../../features/components/notifications/notifications.component';
import {Error} from '../../../classes/error/error';


@Component({
  selector: 'app-create-game',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

  createGameForm: FormGroup;
  notification = new NotificationsComponent();

  constructor(private location: Location, private fb: FormBuilder, private service: GameService) { }


  ngOnInit(): void {
    this.initializeForm();
  }

  // declare form structure //
  initializeForm(): void {
    this.createGameForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      description: this.fb.control('', Validators.required)
    })
  }


  // on cancel, return to parent component //
  onCancel(): void {
    this.location.back();
  }

  onSubmit() {
    if(this.createGameForm.valid) {
      this.createNewGame(<Game>this.createGameForm.value);
    }
  }

  createNewGame(newGame: Game): any {
    return this.service.postNewGameForSpecificUser(newGame).subscribe(
        (game: Game) => {
          this.notification.showNotification('Game, created successfully', 'success');
          this.location.back();
    },
        (error: Error) => {
          if(error.code === 422){
            this.notification.showNotification('This game title, already exists', 'danger');
          } else {
            this.notification.showNotification('Can\'t create new game', 'danger');
          }
          console.log(error.code + ' - ' + error.message);
          this.location.back();
    })}


}
