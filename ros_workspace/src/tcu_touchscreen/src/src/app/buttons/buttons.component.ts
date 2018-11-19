import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

    buttonStyle = 'powerbuttonoff';
    buttonText = 'Power Off';
    togglework = false;
    togglesaftey = false;
    togglepneu = false;

    LightToggle() {
        this.togglework = !this.togglework;
        console.log('Light');
    }

    SafteyToggle() {
        this.togglesaftey = !this.togglesaftey;
        console.log('Saftey');
    }

    PneumaticsToggle() {
        this.togglepneu = !this.togglepneu;
        console.log('Pneumatics');
    }

    constructor(
        private dialog: MatDialog
        // private dialogRef: MatDialogRef<ConfirmdialogComponent>
    ) {}

    // changePower() {
    //     this.buttonStyle = 'powerbuttonon';
    //     this.buttonText = 'Power On';
    // }

    openConfirm() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(ConfirmdialogComponent, dialogConfig);
        //
        // this.dialogRef.afterClosed().subscribe(result => {
        //     this.changePower();
        // });
    }



}
