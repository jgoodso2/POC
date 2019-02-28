import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageMapComponent } from './image-map/image-map.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule} from '@angular/router';
import { ModalDirective } from './modal.directive'
@NgModule({
  declarations: [
    AppComponent,
    ImageMapComponent,
    ModalDirective
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:"home/:filename",component:ImageMapComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
