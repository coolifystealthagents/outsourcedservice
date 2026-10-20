import type { Metadata } from 'next';
import { blogPosts, generatedBlogPosts, batchBlogPosts, august13BlogPosts, august14BlogPosts, august17BlogPosts } from '../../../data';
import { BlogListing, PAGE_SIZE } from '../../blog-listing';

export function generateStaticParams() {
  const totalPosts = blogPosts.length + generatedBlogPosts.length + batchBlogPosts.length + august13BlogPosts.length + august14BlogPosts.length + august17BlogPosts.length;
  return Array.from({ length: Math.max(1, Math.ceil(totalPosts / PAGE_SIZE)) }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const n = Number(page);
  const canonical = n === 1 ? 'https://outsourcedservice.com/blog' : `https://outsourcedservice.com/blog/page/${n}`;
  return {
    title: n === 1 ? 'Blog' : `Blog - Page ${n}`,
    description: n === 1 ? 'Guides for planning Philippines-based staffing.' : `Philippines-based staffing guides, page ${n}.`,
    alternates: { canonical },
  };
}

export default async function NumberedBlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  return <BlogListing page={Number(page)} />;
}
