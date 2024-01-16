// ListPosts component
import React from 'react';
import { PostCard } from "@/components/blog/post-card";

type Post = {
    slug: string;
    date: string;
    title: string;
    description: string;
    thumbnail: string;
    author: string;
};

export const ListPosts = ({ posts }: { posts: Post[] }) => {
    return (
        <div>
            {posts.map((post: Post) => (
                <PostCard
                    key={post.slug}
                    fileName={post.slug}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    thumbnail={post.thumbnail}
                    author={post.author}
                    className="mb-5"
                />
            ))}
        </div>
    );
};
