import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './container/dashboard/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { DashboardAsideComponent } from './components/dashboard-aside/dashboard-aside.component';
import { WallComponent } from './container/dashboard/wall/wall.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import { PostState } from './store/post.state';
import { PostComponent } from './components/post/post.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { LikeComponent } from './components/like/like.component';
import { PostCommentCounterComponent } from './components/post-comment-counter/post-comment-counter.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { FriendRequestComponent } from './components/friends/friend-request/friend-request.component';
import { FriendState } from './store/friend.state';
import { FriendPetitionsComponent } from './components/friends/friend-petitions/friend-petitions.component';
import { FriendPettionState } from './store/friend-petition.state';

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardNavComponent, DashboardFooterComponent, DashboardAsideComponent, WallComponent, PostComponent, PublisherComponent, PostContentComponent, LikeComponent, PostCommentCounterComponent, PostCommentComponent, FriendRequestComponent, FriendPetitionsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    NgxsModule.forFeature([PostState]),
    NgxsModule.forFeature([FriendState]),
    NgxsModule.forFeature([FriendPettionState])

  ]
})
export class DashboardModule { }
