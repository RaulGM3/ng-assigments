import { Component } from '@angular/core';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss'
})
export class GameControlComponent {
  ref: any;
  number = 0;
  logArray: number [] = [];

  constructor (
    private log: ControllerService
  ) {}

  ngOnInit () {

  }

  onStartGame () {
    this.ref = setInterval (() => {
      this.number++;
      console.log (this.number)
      this.logArray.push (this.number);
      this.log.log.next (this.logArray);
    }, 1000);
  }

  onStopGame () {
    clearInterval (this.ref);
  }
}
