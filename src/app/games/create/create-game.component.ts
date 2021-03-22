import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {GameService} from '../game.service';
import {Game} from '../../classes/games/game';
import {Error} from '../../classes/error/error';
import {NotificationsComponent} from '../../notifications/notifications.component';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

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
      description: this.fb.control('') // TODO add , Validators.required)  //
    })
  }


  // on cancel, return to parent component //
  onCancel(): void {
    this.location.back();
  }

  onSubmit() {
    this.createNewGame(<Game>this.createGameForm.value);
  }

  createNewGame(newGame: Game): any {
    return this.service.postNewGameForSpecificUser(newGame).subscribe(
        (game: Game) => {
          this.notification.showNotification('Game: ' + newGame.title + ', created successfully', 'success');
          this.location.back();
    },
        (error: Error) => {
          this.notification.showNotification('Can\'t create new game', 'danger');
          console.log(error.code + ' - ' + error.message);
          this.location.back();
    })}
}
