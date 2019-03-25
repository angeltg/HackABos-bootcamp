import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { FriendCollection  } from '../dashboard.models';
import { FriendService } from '../services/friend.service';
import { GetFriends, GetFriendFailed, GetFriendSuccess } from './friend.actions';
import { tap,catchError } from 'rxjs/operators';



@State<FriendCollection>({
  name: 'friend',
  defaults: {
    ...JSON.parse(localStorage.getItem('friend'))
  }
})
export class FriendState {

  //Para recuperar a la vista hacemos el selector. Aquí cambioamos e
@Selector()
static getFriend (state:FriendCollection){
  return Object.values(state);
}


  constructor(private store: Store, private friendService: FriendService) {}

  @Action(GetFriends)
  getFriends({ dispatch }: StateContext<FriendCollection>) {
    return this.friendService.getFriends().pipe(
      tap( friends => dispatch(new GetFriendSuccess(friends))),
      catchError( error => dispatch(new GetFriendFailed(error.error)))
    )
  }

  @Action(GetFriendSuccess)
  getFriendSuccess(
    {setState } : StateContext<FriendCollection>,
    { friends }: GetFriendSuccess
  ) {
    //ordenamos el array
    const orderedFriends = friends.sort();
    //Con reduce hay que pasar una funcion, un punto de partida y él recorre el array
    //Recorre el array y asicia el id al post. En un objeto clave valor.
     const finalFriends = orderedFriends.reduce((draft, friend) => {
       draft[friend.uuid] = friend;
       return draft;
     },{})
     setState(finalFriends);
  }

  @Action([GetFriendFailed])
  errors (ctx: StateContext<FriendCollection>, {errors}: GetFriendFailed){
    console.log(errors);
  }

 

}
