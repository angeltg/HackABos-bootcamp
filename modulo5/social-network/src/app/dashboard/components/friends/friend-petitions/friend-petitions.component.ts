import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sn-friend-petitions',
  templateUrl: './friend-petitions.component.html',
  styleUrls: ['./friend-petitions.component.scss']
})
export class FriendPetitionsComponent implements OnInit {


  @Input() friendPetitions;   
  constructor() { }

  ngOnInit() {
  }

}
