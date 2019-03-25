import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { Friend } from '../../../dashboard/dashboard.models';
import { GetFriends } from '../../../dashboard/store/friend.actions';
import { FriendState } from '../../../dashboard/store/friend.state';

@Component({
  selector: 'sn-dashboard-aside',
  templateUrl: './dashboard-aside.component.html',
  styleUrls: ['./dashboard-aside.component.scss']
})
export class DashboardAsideComponent implements OnInit {

    //Para recuperar los posts. Como están en un objeto clave valor los pasamos a array
    @Select(FriendState.getFriend) friends$: Observable<Friend[]>; //Es un observable por eso lleva el dolar al final
    friends: Friend[];
  
  constructor( private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetFriends());
    //Como friends$ es un observable nos tenemos que subscribir
    this.friends$.subscribe(friends => (this.friends, friends));
  }

}