import { Component, OnInit } from '@angular/core';
import { GetPosts } from 'src/app/dashboard/store/post.actions';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PostResponse } from 'src/app/dashboard/dashboard.models';
import { PostState } from '../../../store/post.state';


@Component({
  selector: 'sn-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  //Para recuperar los posts. Como están en un objeto clave valor los pasamos a array
  @Select(PostState.getPost) posts$: Observable<PostResponse[]>; //Es un observable por eso lleva el dolar al final
  posts: PostResponse[];
  constructor( private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetPosts());
    //Como post$ es un observable nos tenemos que subscribir
    this.posts$.subscribe(posts => (this.posts, posts));
  }

}
