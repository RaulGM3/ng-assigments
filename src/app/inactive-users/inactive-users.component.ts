import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class InactiveUsersComponent {
  @Input() users: string[] = [];
  @Output() userSetToActive = new EventEmitter<number>();

  ngOnInit () {
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
