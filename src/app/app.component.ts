import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit () {
    this.myForm = new FormGroup({

      'projectName': new FormControl (null, [Validators.required, this.customValidator.bind(this)], this.asyncValidator.bind(this)),  
      'mail': new FormControl (null, [Validators.required, Validators.email]),
      'status': new FormControl (null),
    });
  }

  customValidator (control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'customValidator': true};
    }
    return null;
  }

  asyncValidator (control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'customValidator': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  submit () {

  }
}
