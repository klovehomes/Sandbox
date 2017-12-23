import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatNativeDateModule, MatRadioGroup, MatSidenavModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule,MatCardModule,MatProgressSpinnerModule,MatRadioButton,MatCheckboxModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@NgModule({
  imports: [MatButtonModule,MatInputModule,MatDatepickerModule,MatCardModule,MatCheckboxModule,
    MatProgressSpinnerModule,MatNativeDateModule,MatRadioModule,MatSelectModule,MatSidenavModule,MatDialog,MatDialogRef],
  exports: [MatButtonModule,MatInputModule,MatDatepickerModule,MatCardModule,MatCheckboxModule,
    MatProgressSpinnerModule,MatNativeDateModule,MatRadioModule,MatSelectModule,
    MatSidenavModule,MatDialog,MatDialogRef],
})
export class MaterialModule { }