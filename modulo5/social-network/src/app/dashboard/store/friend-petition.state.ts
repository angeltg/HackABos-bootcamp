import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { FriendPettionCollection  } from '../dashboard.models';
import { FriendPetitionService } from '../services/friend-petition.service';
import { GetFriendsPettion, GetFriendPetitionFailed, GetFriendPetitionSuccess } from './friend-pettion.actions';
import { tap,catchError } from 'rxjs/operators';



@State<FriendPettionCollection>({
  name: 'friendPetition',
  defaults: {
    ...JSON.parse(localStorage.getItem('friendPetition'))
  }
})
export class FriendPettionState {

  //Para recuperar a la vista hacemos el selector. Aquí cambioamos e
@Selector()
static getFriendPetition (state:FriendPettionCollection){
  return Object.values(state);
}


  constructor(private store: Store, private friendPetitionService: FriendPetitionService) {}

  @Action(GetFriendsPettion)
  GetFriendsPettion({ dispatch }: StateContext<FriendPettionCollection>) {
    return this.friendPetitionService.getFriendsPetition().pipe(
      tap( friendsPetition => dispatch(new GetFriendPetitionSuccess(friendsPetition))),
      catchError( error => dispatch(new GetFriendPetitionFailed(error.error)))
    )
  }

  @Action(GetFriendPetitionSuccess)
  getFriendPetitionSuccess(
    {setState } : StateContext<FriendPettionCollection>,
    { friendsPetition }: GetFriendPetitionSuccess
  ) {
    //ordenamos el array
    //const orderedFriends = friendsPetition.sort();
    const orderedFriends = friendsPetition.filter(petition => !petition.request.confirmed);
    //Con reduce hay que pasar una funcion, un punto de partida y él recorre el array
    //Recorre el array y asocia el id al post. En un objeto clave valor.
     const finalFriendsPetition = orderedFriends.reduce((draft, friendPetition) => {
       draft[friendPetition.uuid] = friendPetition;
       return draft;
     },{})
     setState(finalFriendsPetition);
  }

  @Action([GetFriendPetitionFailed])
  errors (ctx: StateContext<FriendPettionCollection>, {errors}: GetFriendPetitionFailed){
    console.log(errors);
  }

 

}
