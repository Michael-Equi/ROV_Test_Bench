import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent {

    confirm() {
       console.log('Confirm');
       localStorage.setItem('buttonText', 'Power On');
       localStorage.setItem('buttonStyle', 'powerbuttonon');
    }

}
