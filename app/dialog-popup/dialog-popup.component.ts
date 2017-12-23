import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-dialog-popup',
  templateUrl: 'dialog-popup.html'
})
export class DialogPopup {

  animal: string = 'none';
  name: string ='non';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    console.log('OpenDialog?');
  }

}
@Component({
  selector: 'dialog-ref',
  templateUrl: 'dialog-ref',
})
export class DialogRef {

  constructor(
    public dialogRef: MatDialogRef<DialogRef>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}