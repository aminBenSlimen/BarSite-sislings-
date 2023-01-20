import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { AboutusComponent } from './sections/aboutus/aboutus.component';
import { OurservicesComponent } from './sections/ourservices/ourservices.component';
import { UpcomingeventsComponent } from './sections/upcomingevents/upcomingevents.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ContactusComponent } from './sections/contactus/contactus.component';
import { SectionsHeadersComponent } from './components/sections-headers/sections-headers.component';
import { VipComponent } from './sections/vip/vip.component';
import { BookingComponent } from './sections/booking/booking.component';
import { MenuComponent } from './sections/menu/menu.component';
import { SignatureComponent } from './sections/signature/signature.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './sections/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { AdditionalserviceComponent } from './sections/additionalservice/additionalservice.component';
import { DjsectionComponent } from './sections/djsection/djsection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    AboutusComponent,
    OurservicesComponent,
    UpcomingeventsComponent,
    GalleryComponent,
    ContactusComponent,
    SectionsHeadersComponent,
    VipComponent,
    BookingComponent,
    MenuComponent,
    SignatureComponent,
    ButtonComponent,
    FooterComponent,
    InputComponent,
    AdditionalserviceComponent,
    DjsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
