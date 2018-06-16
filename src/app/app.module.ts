import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router'; 
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { VideoHeaderComponent } from './video-header/video-header.component';
import { PhotoHeaderComponent } from './photo-header/photo-header.component';
import { ServiceOptionsComponent } from './service-options/service-options.component';
import { ParallaxHomeComponent } from './parallax-home/parallax-home.component';
import { FollowMeComponent } from './follow-me/follow-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

const appRoutes: Routes = [
  {path: 'Pricing', component: PricingComponent},
  {path:'Home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'Blog', component: BlogComponent},
  {path:'Portfolio', component: GalleryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    PricingComponent,
    HomeComponent,
    ContactComponent,
    BlogComponent,
    VideoHeaderComponent,
    PhotoHeaderComponent,
    ServiceOptionsComponent,
    ParallaxHomeComponent,
    FollowMeComponent,
    PortfolioComponent,
    TestimonialsComponent,
    GalleryComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    HttpClientModule, 
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(), 
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
