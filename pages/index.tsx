import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';

import { SocialMediaIcons } from "@/components/social-media-icons"
import { LatestPosts } from "@/components/blog/latest-posts"
import DefaultLayout from '@/components/layout/default-layout';


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
            <main>
                <div className="">
                    <p className="my-5">
                        Hey there. Welcome to my brain dump—a place where I offload insights and musings on all things computer science.
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
                            <LatestPosts posts={latestPosts} />
                        </div>
                    </div>
                </div>
            </main>
        </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const postsDirectory = path.join(process.cwd(), '/posts');
    // const postsDirectory = "@/posts"
    const filenames = fs.readdirSync(postsDirectory);

    const posts: Post[] = filenames.map((filename): Post => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        // Log the data to check its structure
        // console.log(data);

        return {
            slug: filename.replace(/\.mdx$/, ''),
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
    const latestPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3); // Replace 'n' with the number of posts you want to display

    return {
        props: {
            latestPosts,
        },
    };
}