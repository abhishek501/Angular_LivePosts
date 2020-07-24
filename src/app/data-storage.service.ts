import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private postService: PostService, private httpClientService: HttpClient) {}

    saveData() {
        console.log("save");
        const listOfPosts: Post[] = this.postService.getPosts();

        this.httpClientService.put(
            'https://live-posts-81605.firebaseio.com/posts.json', 
            listOfPosts
        ).subscribe(res=>{
            console.log(res);
        });
    }

    fetchData() {
        console.log("fetch");
        this.httpClientService.get(
            'https://live-posts-81605.firebaseio.com/posts.json'
        ).pipe(
            tap((listOfPosts: Post[])=> {
                this.postService.setPosts(listOfPosts);
            })
        ).subscribe();
    }
}