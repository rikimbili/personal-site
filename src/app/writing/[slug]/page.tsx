import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostData, getSortedPostsData } from "~/lib/posts";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
      <MDXRemote source={post.content} />
    </article>
  );
}
