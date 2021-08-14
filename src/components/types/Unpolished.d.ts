import { VFC } from 'react';
import { UnpolishedPost, UnpolishedPostsList } from '_types/posts';

export type PostContentProps = {
  post: UnpolishedPost;
};

// tsc errors if we just type props and then pass key prop to component.
export type PostContentComp = VFC<PostContentProps>;

export type UnpolishedProps = {
  posts: UnpolishedPostsList;
};
