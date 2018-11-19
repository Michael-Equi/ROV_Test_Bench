import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent {

    constructor(
        private dialogRef: MatDialogRef<ConfirmdialogComponent>
    ) {}

    confirm() {
       console.log('Confirm');
       localStorage.setItem('buttonText', 'Power On');
       localStorage.setItem('buttonStyle', 'powerbuttonon');
    }

}
