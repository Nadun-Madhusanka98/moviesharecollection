import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Primeng Modules
import { ToolbarModule } from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';



//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    SidebarModule,
    PanelMenuModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
