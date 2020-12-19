import { meta } from '../pages/blog/*.mdx';
// import { meta } from '_posts/*.mdx';

export default function getPosts() {
  return meta;
}
