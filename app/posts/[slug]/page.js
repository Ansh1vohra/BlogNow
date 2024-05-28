import { getAllPostIds, getPostData } from '../../../lib/posts.js';
import BlogPost from '../../BlogPost.js';

// Function to get all post slugs
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

// Page component to render the blog post
export default async function PostPage({ params }) {
  const postData = await getPostData(params.slug);
  return <BlogPost post={postData} />;
}