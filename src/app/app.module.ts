import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';
import { ShortenedUrlListComponent } from './shortened-url-list/shortened-url-list.component';

@NgModule({
  declarations: [AppComponent, ShortenUrlComponent, ShortenedUrlListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
