import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { GistsComponent } from './gists/gists.component';
import { RepoDetailsComponent } from './repos/repo-details/repo-details.component';
import { ReposComponent } from './repos/repos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: UserListComponent
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent
  },
  {
    path: 'user/:id/followers',
    component: FollowersComponent
  },
  {
    path: 'user/:id/following',
    component: FollowingComponent
  },
  {
    path: 'user/:id/repos',
    component: ReposComponent
  },
  {
    path: 'user/:id/gists',
    component: GistsComponent
  },
  {
    path: 'repo/:id/:repo',
    component: RepoDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
