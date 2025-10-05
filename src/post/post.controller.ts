import { PostService } from './post.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/posts')
  getPosts() {
    return this.postService.getPosts();
  }
}
