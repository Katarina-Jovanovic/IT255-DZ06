import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Post } from "../interfaces/post";
import { selectedPosts } from "./selector/post.selector";
import { PostState } from "./state/post.state";


@Injectable()
export class PostService{

public posts$: Observable<Post[]>;
public constructor(private _http: HttpClient, private _store: Store<PostState>)
{
this.posts$ = this._store.pipe(select(selectedPosts));
}
public fetchPosts(): Observable<[Post]> {
return this._http.get<[Post]>('https://jsonplaceholder.typicode.com/posts');
}
}

