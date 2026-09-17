// In your Sanity Studio project's schema index, import and register these:
//
//   import post from './post'
//   import category from './category'
//   import author from './author'
//   import blockContent from './blockContent'
//
//   export const schemaTypes = [post, category, author, blockContent]
import post from "./post";
import category from "./category";
import author from "./author";
import blockContent from "./blockContent";

export const schemaTypes = [post, category, author, blockContent];
