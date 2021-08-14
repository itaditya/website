import { meta } from '../pages/blog/*.mdx';

/** @return { import('_types/posts').PostsList } */
export default function getPosts() {
  return meta;
}
