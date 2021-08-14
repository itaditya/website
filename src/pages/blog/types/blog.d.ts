import { ChangeEventHandler } from 'react';
import { PostsByCategory } from '_types/posts';

export type BlogPageProps = PostsByCategory;

export type SelectChangeHandler = ChangeEventHandler<HTMLSelectElement>;
