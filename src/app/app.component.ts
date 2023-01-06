import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetPosts } from './interfaces/actions/post.actions';
import { selectedPosts } from './interfaces/selector/post.selector';
import { PostState } from './interfaces/state/post.state';
import { Post } from './services/Post';
import { PostService } from './services/post.service';




@Component({
  selector: 'app-root',
  template: '<app-navbar></app-navbar><br><app-forma></app-forma><app-di></app-di>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts$: Observable<Post>;
  _postService: any;

  constructor(private _store: Store<PostState>, private _router: Router) {
    this.posts$ = this._store.pipe(select(selectedPosts));
    }

  ngOnInit() {
    this._store.dispatch(new GetPosts());
    }
  
  public postForm?: FormGroup; 
  public posts: Post[] = [];

  




public initForm(): void {
this.postForm = new FormGroup({
idLeta:new FormControl('',[Validators.required]),
vremeD: new FormControl('', [Validators.required]),
vremeP: new FormControl('', [Validators.required]),
mestoP: new FormControl('', [ Validators.required]),
mestoD: new FormControl('', [Validators.required])
});
}
public submitForm() {
let idLeta = this.postForm?.get('idLeta')?.value;
let vremeD = this.postForm?.get('vremeD')?.value;
let vremeP = this.postForm?.get('vremeP')?.value;
let mestoD=this.postForm?.get('mestoD')?.value;
let mestoP=this.postForm?.get('mestoP')?.value;


let post = new Post(idLeta,vremeD,mestoD, mestoP,vremeP);
this.createPost(post)
}
public getPost(id: number) {
this._postService.getPost(id).subscribe((data: any) => {
alert(JSON.stringify(data));
})
}
public createPost(post: Post) {
this._postService.createPost(post).subscribe((data: Post) => {
this.posts.unshift(data);
})
}
public deletePost(id: number) {
this._postService.deletePost(id).subscribe((data: any) => {
this._removePostFromList(id);
alert("Post je obrisan sa servera");
})
}
public updatePost(data:any,id:number){
  this._postService.updatePost(data,id).subscribe((data: Post) => {
    this.posts.unshift(data);
    })
}
private _removePostFromList(id: number) {
let ind = this.posts.findIndex(post => post.idLeta == id);
this.posts.splice(ind, 1);
}
}


