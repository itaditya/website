import { meta } from '../pages/blog/*.mdx';

// console.log('uncomment this to update blogs list.');

export default function getPosts() {
  return meta;
}
