import tags from '../staticData/tags.json';

export type CommonPost = {
  title: string;
  description: string;
  date: string;
};

export type Slug = string;
export type SlugList = Array<Slug>;

export type PostTags = keyof typeof tags;
export type PostTagsList = Array<PostTags>;

export type Post = CommonPost & {
  readingTime: string;
  slug: Slug;
  tags: PostTagsList;
  canonicalUrl?: string;
};

export type PostsList = Array<Post>;

export type PostsMap = {
  [slug: string]: Post;
};

export type Categories = 'all' | PostTags;
export type CategoriesList = Array<Categories>;

export type CategoryNamesMap = {
  [tag in Categories]: string;
};

export type CategoryMap = {
  [tag in Categories]: SlugList;
};

export type PostsByCategory = {
  categoryMap: CategoryMap;
  postsMap: PostsMap;
};

export type UnpolishedPost = CommonPost & {
  id: string;
  content: Object;
};

export type UnpolishedPostsList = Array<UnpolishedPost>;
