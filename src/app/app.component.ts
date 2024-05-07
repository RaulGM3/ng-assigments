import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GameControlComponent } from './game-control/game-control.component';
import { ControllerService } from './controller.service';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, GameControlComponent, OddComponent, EvenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showSecret = true;
  ref: any;
  array: number [] = [];

  constructor (
    private log: ControllerService
  ) {}

  ngOnInit () {
    this.log.log.subscribe ((array: number []) => {
      this.array = array;
      console.log (this.array)
    });
  }

  onDisplayDetails () {
    clearInterval (this.ref);
  }
}
