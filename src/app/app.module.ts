import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuhouseComponent } from './components/menuhouse/menuhouse.component';
import { MenuflatComponent } from './components/menuflat/menuflat.component';
import { MenutownhouseComponent } from './components/menutownhouse/menutownhouse.component';
import { HouseItemComponent } from './components/house-item/house-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseItemDescriptionComponent } from './house-item-description/house-item-description.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuhouseComponent,
    MenuflatComponent,
    MenutownhouseComponent,
    HouseItemComponent,
    HouseItemDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
