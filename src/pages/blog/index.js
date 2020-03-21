import Head from 'next/head';
import Link from 'next/link';

import { PostsPopularList } from '_components/PostsSuggestion';
import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import { PublishAndReadTime } from '_components/PostExtraInfo';
import getPosts from '_utils/getPosts';

export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
  return { props: { posts: sortedPosts } };
}

const Blog = props => {
  const { posts } = props;
  return (
    <div
      className="relative min-h-screen font-body bg-gray-200 px-10 py-8 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <Head>
        <title>Blog | Aditya Agarwal</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SiteNavbar activeLink="blog" />

      <main className="col-start-2 col-span-10 row-auto mt-24">
        <h2 className="text-4xl mb-8 font-bold text-gray-800">Popular Posts</h2>
        <PostsPopularList />
        <h2 className="text-4xl mt-16 mb-1 font-bold text-gray-800">Latest Posts</h2>
        <ul className="xl:w-1/2">
          {posts.map((post) => (
            <Link key={post.slug} href={'/blog/' + post.slug}>
              <li className="group mt-8 pl-3 cursor-pointer">
                <h3 className="text-2xl font-medium text-gray-800 group-hover:underline">
                  <a>
                    {post.title}
                  </a>
                </h3>
                <PublishAndReadTime post={post} />
                <p className="text-lg text-gray-700 mt-3">
                  {post.description}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Blog;
