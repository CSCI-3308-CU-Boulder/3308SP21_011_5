import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; // Add your component here
import { LoginComponent } from './auth/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostMakerComponent } from './components/post-maker/post-maker.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';
import { LoggedInGuard } from './auth/logged-in.guard';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateSectionComponent } from './components/create-section/create-section.component';
import { ListSectionsComponent } from './components/list-sections/list-sections.component';
import { ViewPostComponent } from './components/view-post/view-post.component';

//This is my case
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'view-post/:id',
    component: ViewPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-section',
    component: CreateSectionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list-sections',
    component: ListSectionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'loggedIn',
    component: LoggedInComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'postMaker',
    component: PostMakerComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
