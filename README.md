## Website

This repo contains the source code + posts for my [personal website](https://devadi.netlify.app). The preview images for each post is generated via [blog-previews repo](https://github.com/itaditya/blog-previews).

### Steps to create a new blog post-
1. Run `npm run gen:post slug-of-article`.
1. Stop server, clear `.next` and restart.
1. In `blog-previews` repo, run `npm run generate` then `npm run copy`.
