import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChooseUserComponent } from './choose-user/choose-user.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ChooseUserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    CommonModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    NgbModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
