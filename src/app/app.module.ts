import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CSSLoaderService } from './css-loader.service';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BrowserAnimationsModule,
    // MatSlideToggleModule,
  ],
  providers: [CSSLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
