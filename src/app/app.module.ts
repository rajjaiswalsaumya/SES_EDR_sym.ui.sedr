import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SymUiSedrModule } from 'projects/sym-ui/sedr/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SymUiSedrModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
