import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:8080/IT255-DZ/webresources/flights.flights/';
  constructor(private _httpClient: HttpClient) { }

  public getPosts() : Observable<Post> {
    return this._httpClient.get(this.baseUrl + '/').pipe(
    map((data: any) => this._createPostFromObject(data)),
    );
    }
    

    public getPost(idLeta: number) : Observable<Post> {
      return this._httpClient.get(this.baseUrl + '/' + idLeta).pipe(
      map((data: any) => this._createPostFromObject(data)),
      );
      }
      public deletePost(idLeta: number) : Observable<Post> {
      return this._httpClient.delete(this.baseUrl + '/' + idLeta).pipe(
      map((data: any) => this._createPostFromObject(data)),
      );
      }
      public createPost(post: Post) : Observable<Post> {
      return this._httpClient.post(this.baseUrl, post).pipe(
      map((data: any) => this._createPostFromObject(data)),
      );
      
}
public updatePost(data: any, idLeta: number):Observable<Post>{
  return this._httpClient.patch(`${this.baseUrl}/update/${idLeta}`, data).pipe
  (map((data: any) => this._createPostFromObject(data)),
  );

}

private _createPostFromObject(item:any) {
  return new Post(item.idLeta, item.vremeP, item.mestoP, item.vremeD, item.mestoD);
  }

}
