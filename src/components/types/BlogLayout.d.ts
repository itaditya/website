import { ReactNode } from 'react';
import { Post } from '_types/posts';

export type BlogLayoutProps = {
  meta: Post;
  children: ReactNode;
};
