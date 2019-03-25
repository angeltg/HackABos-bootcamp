import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';

import { FriendPetition } from '../../../dashboard/dashboard.models';
import { GetFriendsPettion } from '../../../dashboard/store/friend-pettion.actions';
import { FriendPettionState } from '../../../dashboard/store/friend-petition.state';

@Component({
  selector: 'sn-dashboard-aside',
  templateUrl: './dashboard-aside.component.html',
  styleUrls: ['./dashboard-aside.component.scss']
})
export class DashboardAsideComponent implements OnInit {

    //Para recuperar los posts. Como están en un objeto clave valor los pasamos a array
    @Select(FriendPettionState.getFriendPetition) friendsPetition$: Observable<FriendPetition[]>; //Es un observable por eso lleva el dolar al final
    friendsPetition: FriendPetition[];
  
  constructor( private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetFriendsPettion());
    //Como friends$ es un observable nos tenemos que subscribir
    this.friendsPetition$.subscribe(friendsPetition => (this.friendsPetition, friendsPetition));
  }

}