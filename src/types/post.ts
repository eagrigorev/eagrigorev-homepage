/* Utils */
import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';

export type JournalCategories = (typeof JOURNAL_CATEGORIES)[number];
export type LibraryCategories = (typeof LIBRARY_CATEGORIES)[number];
export type WorksCategories = (typeof WORKS_CATEGORIES)[number];

export type PostCategory =
  | WorksCategories
  | JournalCategories
  | LibraryCategories;

export type ParentCategories = 'Journal' | 'Library' | 'Works';

export interface PostMeta {
  title: string;
  slug: string;
  category: PostCategory;
  datePublished?: string;
  dateEdited: string;
  featuredImage: string;
  bookAuthor?: string;
  excerpt?: string;
  tags?: string[];
}

export interface Post {
  meta: PostMeta;
  content: string;
}
