import { Component, OnInit } from '@angular/core';
import { IPost } from '../models/observable_post.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { ObservablePostService } from '../services/observable-post.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {

  private posts: IPost[];
  private maxRowSize: number = 10;
  private maxCols: number;

  constructor(private _postService: ObservablePostService, private _httpClient: HttpClient) { }

  ngOnInit() {
    this._postService.getPosts().subscribe((postData) => {
        this.posts = postData;
      },
      (error) => { console.log(error); },
      () => {console.log("successful");}
    );

    this._httpClient.get('https://my-json-server.typicode.com/techsithgit/json-faker-directory/profile')
      .subscribe(
        (response : any[]) => {
          console.log(response);
        },
        (error : HttpErrorResponse) => {
          console.log(error.status);
        },
        () => {
          console.log("successful");
        }
      );
  }
}
