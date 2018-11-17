import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

    constructor(private dialog: MatDialog) {}

    openConfirm() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(ConfirmdialogComponent, dialogConfig);
    }

}
