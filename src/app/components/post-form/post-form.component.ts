import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  post: Post

  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title:string, body:string){
    if(!title || !body){
      alert('Please Add Post')
    }else{
      this.postService.savePost({title, body} as Post).subscribe(post=>{
        this.newPost.emit(post);
      })
    }
  }

}
