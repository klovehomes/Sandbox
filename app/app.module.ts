import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' ;
import {MaterialModule} from './material.module';
import { CientInfoFormComponent } from './cient-info-form/cient-info-form.component'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogPopup } from './dialog-popup/dialog-popup.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    CientInfoFormComponent,
    DialogPopup
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
