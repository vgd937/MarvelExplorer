import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterSearchComponent } from './character-search/character-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // ← imprescindible para inyectar HttpClient
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
