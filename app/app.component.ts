import { Component } from '@angular/core';
import {DialogPopup} from './dialog-popup/dialog-popup.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dentech Software';
  constructor(public dialog: MatDialog) {}
  selectPart(tooth: string): void {
    let dialogRef = this.dialog.open(DialogPopup, {
      width: '250px',
      data: { name: this.title, animal: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
    });
  }
}
