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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import {CalendarModule} from 'primeng/calendar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AllEventsComponent } from './pages/all-events/all-events.component';
import { AllMenuComponent } from './pages/all-menu/all-menu.component';
import { AllGalleryComponent } from './pages/all-gallery/all-gallery.component';
import { AllSignaturesComponent } from './pages/all-signatures/all-signatures.component';
import { AllPromosComponent } from './pages/all-promos/all-promos.component';
import { AllServicesComponent } from './pages/all-services/all-services.component';
import { IndexComponent } from './pages/index/index.component';
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
    DjsectionComponent,
    AllEventsComponent,
    AllMenuComponent,
    AllGalleryComponent,
    AllSignaturesComponent,
    AllPromosComponent,
    AllServicesComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    CalendarModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [HttpClient,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
