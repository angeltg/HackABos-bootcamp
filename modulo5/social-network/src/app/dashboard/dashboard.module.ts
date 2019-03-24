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

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardNavComponent, DashboardFooterComponent, DashboardAsideComponent, WallComponent, PostComponent, PublisherComponent, PostContentComponent, LikeComponent, PostCommentCounterComponent, PostCommentComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    NgxsModule.forFeature([PostState])
  ]
})
export class DashboardModule { }
