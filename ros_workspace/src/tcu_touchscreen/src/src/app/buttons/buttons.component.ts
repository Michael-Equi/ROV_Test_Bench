import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

    buttonText: string;
    buttonStyle: string;
    togglework = false;
    togglesaftey = false;
    togglepneu = false;



    LightToggle() {
        this.togglework = !this.togglework;
    }

    SafteyToggle() {
        this.togglesaftey = !this.togglesaftey;
    }

    PneumaticsToggle() {
        this.togglepneu = !this.togglepneu;
    }

    updatevars() {
        this.buttonText = localStorage.getItem('buttonText');
        this.buttonStyle = localStorage.getItem('buttonStyle');
    }

    ngOnInit() {
        setInterval(this.updatevars(), 1000)
    }

    constructor(private dialog: MatDialog) {}

    openConfirm() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(ConfirmdialogComponent, dialogConfig);
    }

}
