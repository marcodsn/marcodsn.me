import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";

import { SocialMediaIcons } from "@/components/social-media-icons";
import { ListPosts } from "@/components/blog/list-posts";
import DefaultLayout from "@/components/layout/default-layout";

// Alternative text colors: text-neutral-900 dark:text-neutral-200

type Post = {
  slug: string;
  date: string;
  title: string;
  description: string;
  thumbnail: string;
  fileName: string;
  author: string;
};

export default function Home({ latestPosts }: { latestPosts: Post[] }) {
  return (
    <DefaultLayout>
      <div className="">
        <p className="my-5">
          Hey there. Welcome to my brain dump—a place where I offload insights
          and musings on all things computer science.
          <br />
          <br />
          Currently studying Computer Science at the{" "}
          <span className="font-bold">University of Udine</span>, Italy.
        </p>
        <div className="my-5">
          <SocialMediaIcons />
        </div>
        {/* <div className="h-px w-full bg-accent rounded-full" /> */}
        <div className="mt-10">
          <p>
            <span className="text-lg font-bold">Latest Posts</span>
          </p>
          <div className="mb-5">
            <ListPosts posts={latestPosts} />
          </div>
          <div className="flex justify-center mb-8">
            <Link
              href="/posts"
              className="p-3 rounded-md hover:bg-accent transition"
            >
              <span className="text-sm font-medium">View all posts</span>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "/posts");
  // const postsDirectory = "@/posts"
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename): Post => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    // Log the data to check its structure
    // console.log(data);

    return {
      slug: filename.replace(/\.mdx$/, ""),
      // Ensure all required fields are present
      date: data.date,
      title: data.title,
      description: data.description,
      thumbnail: data.thumbnail,
      fileName: filename.substring(0, filename.length - 4),
      author: data.author,
    };
  });

  // Sort posts by date and get the latest n posts
  const latestPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3); // Replace 'n' with the number of posts you want to display

  return {
    props: {
      latestPosts,
    },
  };
};
