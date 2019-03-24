import { State, Store, StateContext, Action, Selector } from '@ngxs/store';
import { PostCollection  } from '../dashboard.models';
import { PostService } from '../services/post.service';
import { GetPosts, GetPostFailed, GetPostSuccess } from './post.actions';
import { tap,catchError } from 'rxjs/operators';



@State<PostCollection>({
  name: 'post',
  defaults: {
    ...JSON.parse(localStorage.getItem('post'))
  }
})
export class PostState {

  //Para recuperar a la vista hacemos el selector. Aquí cambioamos e
@Selector()
static getPost (state:PostCollection){
  return Object.values(state);
}


  constructor(private store: Store, private postService: PostService) {}

  @Action(GetPosts)
  getPosts({ dispatch }: StateContext<PostCollection>) {
    return this.postService.getWall().pipe(
      tap( posts => dispatch(new GetPostSuccess(posts))),
      catchError( error => dispatch(new GetPostFailed(error.error)))
    )
  }

  @Action(GetPostSuccess)
  getPostsSuccess(
    {setState } : StateContext<PostCollection>,
    { posts }: GetPostSuccess
  ) {
    //ordenamos el array
    const orderedPosts = posts.sort((p1,p2) => {
      return p2.createdAt - p1.createdAt; 
    });
    //Con reduce hay que pasar una funcion, un punto de partida y él recorre el array
    //Recorre el array y asicia el id al post. En un objeto clave valor.
     const finalPosts = orderedPosts.reduce((draft, post) => {
       draft[post.id] = post;
       return draft;
     },{})
     setState(finalPosts);
  }

  @Action([GetPostFailed])
  errors (ctx: StateContext<PostCollection>, {errors}: GetPostFailed){
    console.log(errors);
  }

 

}
