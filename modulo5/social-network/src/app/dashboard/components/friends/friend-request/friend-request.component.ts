import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sn-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {

  @Input() friend;

  constructor() { }

  ngOnInit() {
  }

}
