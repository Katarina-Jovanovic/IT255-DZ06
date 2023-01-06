import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Post } from './services/Post';
import { PostService } from './services/post.service';



@Component({
  selector: 'app-root',
  template: '<app-navbar></app-navbar><br><app-forma></app-forma><app-di></app-di>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public postForm?: FormGroup; 
  public posts: Post[] = [];

constructor(private _postService: PostService) {
this._postService.getPosts().subscribe((data) => {
})
this.initForm();
}
public initForm() {
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
this._postService.getPost(id).subscribe((data) => {
alert(JSON.stringify(data));
})
}
public createPost(post: Post) {
this._postService.createPost(post).subscribe((data) => {
this.posts.unshift(data);
})
}
public deletePost(id: number) {
this._postService.deletePost(id).subscribe((data) => {
this._removePostFromList(id);
alert("Post je obrisan sa servera");
})
}
public updatePost(data:any,id:number){
  this._postService.updatePost(data,id).subscribe((data) => {
    this.posts.unshift(data);
    })
}
private _removePostFromList(id: number) {
let ind = this.posts.findIndex(post => post.idLeta == id);
this.posts.splice(ind, 1);
}
}


