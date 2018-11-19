import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MessagesModule } from './messages/messages.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { ChatModule } from './chat/chat.module';
import { GalleryModule } from './gallery/gallery.module';
import { PhrasesModule } from './phrases/phrases.module';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app-interceptor';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// the second parameter 'fr' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    MessagesModule,
    AppRoutingModule,
    ChatModule,
    GalleryModule,
    PhrasesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
