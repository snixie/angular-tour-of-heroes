import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { CardsComponent } from './cards/cards.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { EditComponent } from './components/edit/edit.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgToastModule } from 'ng-angular-popup';
import { GraphQLModule } from './graphql.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PermissionComponent } from './components/permission/permission.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false,
    // }),
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    BrowserAnimationsModule,
    NgIf,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    NgToastModule,
    MatSlideToggleModule,
    GraphQLModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroesComponent,
    HeroSearchComponent,
    CardsComponent,
    FormComponent,
    ConfirmationComponent,
    EditComponent,
    PermissionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
