import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// services
import { HandleErrorService } from './services/handle-error.service';

// components
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    HandleErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
