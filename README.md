## Website

This repo contains the source code + posts for my [personal website](https://devadi.netlify.app). The preview images for each post is generated via [blog-previews repo](https://github.com/itaditya/blog-previews).

### Steps to create a new blog post-

1. Run `yarn gen:post slug-of-article`.
1. Stop server, clear `.next` and restart.
1. In `blog-previews` repo, run `yarn generate` then `yarn copy`.
1. Change the "Hot off the press" article.
