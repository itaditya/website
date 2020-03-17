import path from 'path';
import fs from 'fs';

export function getPosts() {
  const postsDataFilePath = path.resolve(process.cwd(), 'src', 'staticData', 'posts.json');
  const buffer = fs.readFileSync(postsDataFilePath, 'utf8');
  return JSON.parse(buffer);
}

export function getLatestPosts() {
  const posts = getPosts();
  const postsSortedByLatest = posts.sort((a, b) => b.date.localeCompare(a.date));
  return postsSortedByLatest;
}
