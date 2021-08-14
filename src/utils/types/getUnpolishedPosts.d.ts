import { UnpolishedPostsList } from '_types/posts';

export type getUnpolishedPostsOptions = {
  loadDrafts?: boolean;
};

export type getUnpolishedPostsFunc = (
  options?: getUnpolishedPostsOptions,
) => Promise<UnpolishedPostsList>;
