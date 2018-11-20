import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { IPost } from '../models/observable_post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ObservablePostService {

  constructor(private _http: Http) { }

  getPosts(): Observable<IPost[]> {
    console.log(this._http.get("https://jsonplaceholder.typicode.com/posts"));
    return this._http.get("https://jsonplaceholder.typicode.com/posts")
        .pipe(
          map(
            (response: Response) => <IPost[]>response.json()
          )
        );
  }
}
