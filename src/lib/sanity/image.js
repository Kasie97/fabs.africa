import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

// Usage: <img src={urlFor(post.mainImage).width(800).url()} />
export function urlFor(source) {
  return builder.image(source);
}
