// Central place for every GROQ query the app uses, so schema field names
// only need to line up in one spot.

export const POST_LIST_QUERY = `
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  excerpt,
  publishedAt,
  "slug": slug.current,
  "mainImage": mainImage,
  "category": category->title
}
`;

export const POST_BY_SLUG_QUERY = `
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  excerpt,
  publishedAt,
  body,
  "mainImage": mainImage,
  "category": category->title,
  "author": author->name
}
`;
