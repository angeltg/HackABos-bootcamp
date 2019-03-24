export interface PostCollection{
  //Aquí vamos a pasar los datos a un objeto para facilitar el manejo de los post
  [key: string]: PostResponse;
}

export interface PostResponse {
  likes: string;
  author: Author;
  owner: Author;
  content: string;
  comments: Comment[];
  createdAt: number;
  id: string;
}

export interface Author {
  avatarUrl:string;
  fullName: string;
  uuid: string;
}

export interface Comment {

  menssaje: string;
  author: Author;
  creatAt: number;
  id: string;
}