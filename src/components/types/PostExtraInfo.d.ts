import { HTMLProps } from 'react';
import { Post, CommonPost } from '_types/posts';

type DivProps = HTMLProps<HTMLDivElement>;

export type PublishDateProps = DivProps & {
  post: CommonPost;
};

export type PublishAndReadTimeProps = PublishDateProps & {
  post: Post;
};
