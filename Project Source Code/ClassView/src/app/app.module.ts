import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoMaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlertComponent } from './components/alert/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { KatexModule } from 'ng-katex';
import { LoggedInNavbarComponent } from './components/logged-in-navbar/logged-in-navbar.component';
import { PostMakerComponent } from './components/post-maker/post-maker.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import {AuthModule} from './auth/auth.module'
import {NgxWebstorageModule} from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import {TokenInterceptor} from './token-interceptor'
import { AuthGuard } from './auth/auth.guard';
import { LoggedInGuard } from './auth/logged-in.guard';
import { PostTileComponent } from './components/post-tile/post-tile.component';
import { SectionSideBarComponent } from './components/section-side-bar/section-side-bar.component';
import { VoteButtonComponent } from './components/vote-button/vote-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateSectionComponent } from './components/create-section/create-section.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ListSectionsComponent } from './components/list-sections/list-sections.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatChipsModule} from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatCommonModule } from '@angular/material/core';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PostSidebarComponent } from './components/post-sidebar/post-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoggedInComponent,
    ProfileComponent,
    AlertComponent,
    LoggedInNavbarComponent,
    PostMakerComponent,
    PostTileComponent,
    SectionSideBarComponent,
    VoteButtonComponent,
    CreateSectionComponent,
    CreatePostComponent,
    ListSectionsComponent,
    ViewPostComponent,
    PostSidebarComponent
  ],
  imports: [
    //KatexModule,
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RichTextEditorAllModule,
    AuthModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    EditorModule,
    MatInputModule,
    MatCommonModule,
    MatChipsModule
  ],
  exports: [
    MatChipsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
