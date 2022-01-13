import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

@NgModule({
  imports: 
  [MenubarModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    DialogModule,
    ReactiveFormsModule,
    CheckboxModule,
    AutoCompleteModule,
    CardModule,
    InputNumberModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule],
  exports: [MenubarModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    DialogModule,
    ReactiveFormsModule,
    CheckboxModule,
    AutoCompleteModule,
    CardModule,
    InputNumberModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule]
})
export class AppPrimeNgModule { }
